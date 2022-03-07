import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/storage.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;
  isLogged: boolean = false;

  constructor(private storage: TokenStorageService) { }

  ngOnInit(): void {
    console.log(this.storage.getToken());
    this.checkLogin();
  }

  checkLogin() {
    console.log(this.storage.getToken());
    if(this.storage.getToken() != '' && this.storage.getToken() != undefined && this.storage.getToken() != null ) {
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  signOut() {
    this.storage.signOut();
    this.isLogged = false;
    window.location.reload();
  }

}
