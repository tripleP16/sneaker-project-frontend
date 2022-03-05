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
  today = new Date();
  date = new Date(this.today.setFullYear(this.today.getFullYear() - 14))
  minDate =  this.date.toLocaleString().split(/\D/).slice(0,3).map(num=>num.padStart(2,"0")).join("/");
  // constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
  }
  // createUser(user: UserToRegister) {
  //   this.userService.createUser(user).subscribe((result) =>{
  //     console.log(result);
  //   })
    
  // }

  onSubmit(f: NgForm) {
    console.log(f);
  }


}
