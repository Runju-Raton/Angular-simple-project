
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './product/edit/edit.component';
import { NavComponent } from './Home/nav/nav.component';

const routes:Routes=[
  { path:'home', component:NavComponent},
  { path:'product', component:ProductComponent},
  { path:'product/addProduct', component:EditComponent},
  
];
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EditComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
