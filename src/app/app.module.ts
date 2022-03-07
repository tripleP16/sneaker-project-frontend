import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoginUsersComponent } from './login-users/login-users.component';
import { LoginAdminsComponent } from './login-admins/login-admins.component';
import { SneakerShowcaseComponent } from './sneaker-showcase/sneaker-showcase.component';
import { SneakerItemComponent } from './sneaker-item/sneaker-item.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './variables/server';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModelPipe } from './pipes/model.pipe';
import { PricePipe } from './pipes/price.pipe';
import { ReleaseDatePipe } from './pipes/release.date.pipe';
import { RegisterShoeComponent } from './register-shoe/register-shoe.component';
import { AngularFireModule } from "@angular/fire/compat";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from "@angular/fire/compat/storage";
import { environment } from 'src/environments/environment';
import { ApiService2 } from './services/api.service';
import { AuthInterceptor } from './interceptors/http.interceptor';
import { RegisterBrandComponent } from './register-brand/register-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginUsersComponent,
    LoginAdminsComponent,
    SneakerShowcaseComponent,
    SneakerItemComponent,
    RegisterUserComponent,
    ErrorAlertComponent,
    SuccessAlertComponent,
    ModelPipe,
    PricePipe,
    ReleaseDatePipe,
    RegisterShoeComponent,
    RegisterBrandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule, 
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [ApiService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
