import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './footer/footer.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import { LoginAdminsComponent } from './login-admins/login-admins.component';
import { SneakerContentComponent } from './sneaker-content/sneaker-content.component';
import { SneakerShowcaseComponent } from './sneaker-showcase/sneaker-showcase.component';
import { SneakerComponent } from './sneaker/sneaker.component';
import { SneakerFiltersComponent } from './sneaker-filters/sneaker-filters.component';
import { SneakerItemComponent } from './sneaker-item/sneaker-item.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginUsersComponent,
    LoginAdminsComponent,
    SneakerContentComponent,
    SneakerShowcaseComponent,
    SneakerComponent,
    SneakerFiltersComponent,
    SneakerItemComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
