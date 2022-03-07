import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrandService } from '../services/brands.service';

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
  constructor(private readonly brandService: BrandService) { }

  ngOnInit(): void {
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
}
