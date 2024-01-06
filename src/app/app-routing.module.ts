import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListProductComponent } from './list-product/list-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'navbar', component: NavbarComponent },
	{ path: 'products', component: ListProductComponent },
	{ path: 'add', component: CreateProductComponent },
  { path: 'details/:id', component: DetailsProductComponent },
  { path: 'update/:id', component: UpdateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
