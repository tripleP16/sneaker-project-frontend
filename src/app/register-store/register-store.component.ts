import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/storage.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-register-store',
  templateUrl: './register-store.component.html',
  styleUrls: ['./register-store.component.css']
})
export class RegisterStoreComponent implements OnInit {
  isLogged = false;
  isLoading = false;
  isError = false;
  errorContent = '';
  succeed = false;
  successMessage = '';
  constructor(
    private readonly storeService: StoreService,
    private storage: TokenStorageService,  
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  onSubmit(f: NgForm) {
    this.isLoading = true;
    this.storeService.createStore(f.value).subscribe((response) =>{
      this.isLoading = false;
      this.succeed = true;
      this.successMessage = 'La tienda ha sido creada exitosamente';
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

}
