import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserToRegister } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  isLoading = false;
  isError = false;
  errorContent = '';
  succeed = false;
  successMessage = '';
  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
  }
  async onSubmit(f: NgForm) {
    this.isLoading = true;
    this.userService.createUser(f.value).subscribe((response)=> {
      this.isLoading = false;
      this.succeed = true;
      this.successMessage = 'El usuario se ha registrado correctamente';
      f.reset();
    }, error => {
      this.isLoading = false;
      this.errorContent = error.error.message;
      this.isError = true;
    })
  }


}
