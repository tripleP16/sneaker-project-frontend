import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Brand } from '../models/brand.model';
import { ShoeToCreate } from '../models/shoe.create.model';
import { Shoe } from '../models/shoe.model';
import { BrandService } from '../services/brands.service';
import { ShoesService } from '../services/shoes.service';
import { TokenStorageService } from '../services/storage.service';

@Component({
  selector: 'app-register-shoe',
  templateUrl: './register-shoe.component.html',
  styleUrls: ['./register-shoe.component.css']
})
export class RegisterShoeComponent implements OnInit {
  isLogged = false;
  isLoading = false;
  isError = false;
  errorContent = '';
  succeed = false;
  successMessage = '';
  downloadURL: any;
  fb: any;
  brands: Brand[] = [];
  constructor(
    private storage: TokenStorageService,  
    private router: Router,
    private storageFire: AngularFireStorage,
    private readonly brandsService: BrandService,
    private readonly shoeService: ShoesService
    ) { }

  ngOnInit(): void {
    this.checkLogin();
    this.getBrands()
  }

  onSubmit(f: NgForm){
    this.isLoading = true;
    const shoeToCreate: ShoeToCreate = {
      releaseDate: f.value.releaseDate,
      price: f.value.price,
      image: this.fb,
      model: f.value.model
    }
    this.shoeService.createShoe(shoeToCreate, f.value.brand).subscribe((response) =>{
      this.isLoading = false;
      this.succeed = true;
      this.successMessage = 'El zapato ha sido creado correctamente';
      this.isError = false;
      this.errorContent = '';
      f.reset()
    }, error => {
      this.isLoading = false;
      this.errorContent = error.error.message;
      this.isError = true;
    })
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
  getBrands() {
    this.brandsService.getBrands().subscribe((response)=> this.brands =  response);
  }

  onFileSelected(event: any) {
    this.isLoading = true;
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storageFire.ref(filePath);
    const task = this.storageFire.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
              this.isLoading = false;
            }
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url)
        }
      });
  }
}
