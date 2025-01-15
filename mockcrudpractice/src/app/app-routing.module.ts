import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { CityComponent } from './components/city/city.component';

const routes: Routes = [
  {path:"", component:CitiesComponent},
  {path:"cities",component:CitiesComponent},
  {path:"city",component:CityComponent},
  {path:"**",component:CitiesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
