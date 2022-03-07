import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBrandComponent } from './register-brand/register-brand.component';
import { RegisterShoeComponent } from './register-shoe/register-shoe.component';
import { RegisterStoreComponent } from './register-store/register-store.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SneakerShowcaseComponent } from './sneaker-showcase/sneaker-showcase.component';
import { SneakerToStoreComponent } from './sneaker-to-store/sneaker-to-store.component';

const routes: Routes = [
  {path:'register-user', component: RegisterUserComponent,  data: { animation: 'registerUserPage' }},
  {path:'', component: SneakerShowcaseComponent, data: { animation: 'defaultPage' }},
  {path: 'create-shoe', component: RegisterShoeComponent},
  {path: 'create-brand', component: RegisterBrandComponent},
  {path: 'create-store', component: RegisterStoreComponent},
  {path: 'add-shoe-store', component: SneakerToStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
