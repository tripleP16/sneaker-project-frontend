import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
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
  constructor(
    private storage: TokenStorageService,  
    private router: Router,
    private storageFire: AngularFireStorage
    ) { }

  ngOnInit(): void {
    this.checkLogin();
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
  onFileSelected(event: any) {
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
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
}
