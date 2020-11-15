import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HaircareComponent } from './pages/haircare/haircare.component';
import { SkincareComponent } from './pages/skincare/skincare.component';
import { CosmeticsComponent } from './pages/cosmetics/cosmetics.component';
import { OralcareComponent } from './pages/oralcare/oralcare.component';

const routes: Routes = [
  { path: "", component: HomepageComponent, pathMatch: "full" },
  { path: "contact", component: ContactComponent, pathMatch: "full" },
  { path: "haircare", component: HaircareComponent, pathMatch: "full" },
  { path: "skincare", component: SkincareComponent, pathMatch: "full" },
  { path: "cosmetics", component: CosmeticsComponent, pathMatch: "full" },
  { path: "oralcare", component: OralcareComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }