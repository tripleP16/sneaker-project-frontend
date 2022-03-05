import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SneakerContentComponent } from './sneaker-content/sneaker-content.component';
import { SneakerComponent } from './sneaker/sneaker.component';

const routes: Routes = [
  {path:'register-user', component: RegisterUserComponent,  data: { animation: 'registerUserPage' }},
  {path:'', component: SneakerContentComponent, data: { animation: 'defaultPage' }},
  {path:'sneaker', component: SneakerComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
