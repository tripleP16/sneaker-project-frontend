import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from '../services/brands.service';
import { TokenStorageService } from '../services/storage.service';

@Component({
  selector: 'app-register-brand',
  templateUrl: './register-brand.component.html',
  styleUrls: ['./register-brand.component.css']
})
export class RegisterBrandComponent implements OnInit {
  isLogged = false;
  isLoading = false;
  isError = false;
  errorContent = '';
  succeed = false;
  successMessage = '';
  constructor(
    private readonly brandService: BrandService, 
    private storage: TokenStorageService,  
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.checkLogin()
  }

  onSubmit(f:NgForm) {
    this.isLoading = true;
    this.brandService.createBrand(f.value).subscribe((response) =>{
      this.isLoading = false;
      this.succeed = true;
      this.successMessage = 'La marca ha sido creada exitosamente';
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
