import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpInterceptorService } from './services/httpInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    CreateProductComponent,
    DetailsProductComponent,
    ListProductComponent,
    UpdateProductComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [{
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpInterceptorService,
                    multi: true
                  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
