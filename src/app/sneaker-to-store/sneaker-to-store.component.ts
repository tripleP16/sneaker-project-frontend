import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Shoe } from '../models/shoe.model';
import { Store } from '../models/store.model';
import { ShoesService } from '../services/shoes.service';
import { TokenStorageService } from '../services/storage.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-sneaker-to-store',
  templateUrl: './sneaker-to-store.component.html',
  styleUrls: ['./sneaker-to-store.component.css']
})
export class SneakerToStoreComponent implements OnInit {
  isLogged = false;
  isLoading = false;
  isError = false;
  errorContent = '';
  succeed = false;
  successMessage = '';
  stores: Store[] = [];
  shoes: Shoe[] = []
  constructor(
    private readonly shoesService: ShoesService,
    private readonly storeService: StoreService,
    private storage: TokenStorageService,  
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkLogin();
    this.getStores();
    this.getShoes();
  }

  onSubmit(f: NgForm) {
    this.isLoading = true;
    this.storeService.addStoreToShoe(f.value.store, f.value.sneaker).subscribe((response) =>{
      this.isLoading = false;
      this.succeed = true;
      this.successMessage = 'El zapato se ha agregado correctamente';
      this.isError = false;
      this.errorContent = '';
      f.reset()
    }, error => {
      this.isLoading = false;
      this.errorContent = error.error.message;
      this.isError = true;
    })
  }
  getShoes() {
    this.isLoading = true;
    this.shoesService.getShoes().subscribe((response) => {
      this.shoes = response
      this.isLoading = false;
    
    });
  }
  getStores() {
    this.storeService.getStores().subscribe((response) => this.stores = response);
  }

  checkLogin() {
    console.log(this.storage.getToken());
    if(this.storage.getToken() != '' && this.storage.getToken() != undefined && this.storage.getToken() != null ) {
      this.isLogged = true;
    }else {
      this.isLogged = false;
      this.router.navigate(['/'])
    }
  }
}
