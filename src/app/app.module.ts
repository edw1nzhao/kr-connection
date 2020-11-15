import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { LangbarComponent } from './shared/langbar/langbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopbarComponent } from './shared/shopbar/shopbar.component';

import { HaircareComponent } from './pages/haircare/haircare.component';
import { SkincareComponent } from './pages/skincare/skincare.component';
import { CosmeticsComponent } from './pages/cosmetics/cosmetics.component';
import { OralcareComponent } from './pages/oralcare/oralcare.component';
import { SearchComponent } from './shared/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LangbarComponent,
    FooterComponent,
    HomepageComponent,
    ContactComponent,
    ShopbarComponent,
    HaircareComponent,
    SkincareComponent,
    CosmeticsComponent,
    OralcareComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
