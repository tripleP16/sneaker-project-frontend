import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { TokenStorageService } from '../services/storage.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-login-admins',
  templateUrl: './login-admins.component.html',
  styleUrls: ['./login-admins.component.css']
})
export class LoginAdminsComponent implements OnInit {
  isLoading = false;
  isError = false;
  errorContent = '';
  succeed = false;
  successMessage = '';
  constructor(
    private readonly adminService: AdminService,
    private readonly storageService: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.isLoading = true;

    this.adminService.login(f.value).subscribe((response) => {
      this.isLoading = false;
      this.succeed = true;
      this.errorContent = '';
      this.isError = false;
      this.successMessage = 'Ha iniciado sesion correctamente';
      this.storageService.saveToken(response)
      f.reset();
      setTimeout(this.reloadPage, 1000)
    }, error => {
      this.isLoading = false;
      this.errorContent = error.error.message;
      this.isError = true;
    })
  }

  reloadPage(): void {
    window.location.reload();
  }
}
