import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBrandComponent } from './register-brand/register-brand.component';
import { RegisterShoeComponent } from './register-shoe/register-shoe.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SneakerShowcaseComponent } from './sneaker-showcase/sneaker-showcase.component';
import { SneakerComponent } from './sneaker/sneaker.component';

const routes: Routes = [
  {path:'register-user', component: RegisterUserComponent,  data: { animation: 'registerUserPage' }},
  {path:'', component: SneakerShowcaseComponent, data: { animation: 'defaultPage' }},
  {path:'sneaker', component: SneakerComponent,},
  {path: 'create-shoe', component: RegisterShoeComponent},
  {path: 'create-brand', component: RegisterBrandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
