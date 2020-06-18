import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';

const appRoutes: Routes = [
{
    path: '',
    component: HomeComponent
},  
{
    path: 'country',
    component: CountryComponent
}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, CountryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
