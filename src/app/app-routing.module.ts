import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselServiciosComponent } from './carrousel-servicios/carrousel-servicios.component';

const routes: Routes = [
{path:  'Servicios', component: CarrouselServiciosComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
