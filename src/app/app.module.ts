
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './product/edit/edit.component';
import { NavComponent } from './Home/nav/nav.component';
import { HeaderComponent } from './header/header/header.component';
import { ServiceComponent } from './Service/service/service.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AboutComponent } from './about/about/about.component';
import { UsersComponent } from './users/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersService } from './services/users.service';
import { SliderComponent } from './Home/slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserAddressComponent } from './users/user-address/user-address.component';
import { UserCompanyComponent } from './users/user-company/user-company.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Auth/login/login.component';
import { RegistrationComponent } from './Auth/registration/registration.component';

const routes:Routes=[
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component:SliderComponent},
  { path:'product', component:ProductComponent},
  { path:'product/addProduct', component:EditComponent},
  { path:'service', component:ServiceComponent},
  { path:'users', component:UsersComponent},
  { path:'users/:id', component:UserDetailsComponent,
    children: [
      { path: '', component: UserAddressComponent },
      { path: 'address', component: UserAddressComponent },
      { path: 'company', component: UserCompanyComponent },
  ]

  },
  { path:'about', component:AboutComponent},
  { path:'contact', component:ContactComponent},
  { path:'login', component:LoginComponent},
  { path:'**', component:SliderComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EditComponent,
    NavComponent,
    HeaderComponent,
    ServiceComponent,
    ContactComponent,
    AboutComponent,
    UsersComponent,
    SliderComponent,
    UserDetailsComponent,
    UserAddressComponent,
    UserCompanyComponent,
    LoginComponent,
    RegistrationComponent,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    CarouselModule,
    NgbModule 
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
