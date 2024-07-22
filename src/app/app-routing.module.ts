import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrouselServiciosComponent } from './carrousel-servicios/carrousel-servicios.component';
import { AlmamaComponent } from './almama/almama.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ContactolabComponent } from './contactolab/contactolab.component';
import { GalacticnftComponent } from './galacticnft/galacticnft.component';
import { HugospizzaComponent } from './hugospizza/hugospizza.component';
import { InferjsComponent } from './inferjs/inferjs.component';
import { InicioComponent } from './inicio/inicio.component';
import { NeohomeComponent } from './neohome/neohome.component';
import { PerfilgioComponent } from './perfilgio/perfilgio.component';
import { PerfilnicolasComponent } from './perfilnicolas/perfilnicolas.component';
import { UneteanosotrosComponent } from './uneteanosotros/uneteanosotros.component';
import { ViajecontruyeComponent } from './viajecontruye/viajecontruye.component';
import { ViajecreceComponent } from './viajecrece/viajecrece.component';
import { ViajedecideComponent } from './viajedecide/viajedecide.component';
import { ViajedescubreComponent } from './viajedescubre/viajedescubre.component';
import { ViajeenriqueceComponent } from './viajeenriquece/viajeenriquece.component';
import { SliderportafolioComponent } from './sliderportafolio/sliderportafolio.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioTransformacionComponent } from './inicio-transformacion/inicio-transformacion.component';
import { ViajecreativoComponent } from './viajecreativo/viajecreativo.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { SliderptComponent } from './sliderpt/sliderpt.component';
import { Ptv3Component } from './ptv3/ptv3.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'almama', component: AlmamaComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'contactolab', component: ContactolabComponent },
  { path: 'galacticnft', component: GalacticnftComponent },
  { path: 'hugospizza', component: HugospizzaComponent },
  { path: 'inferjs', component: InferjsComponent },
  { path: 'neohome', component: NeohomeComponent },
  { path: 'perfilgio', component: PerfilgioComponent },
  { path: 'uneteanosotros', component: UneteanosotrosComponent },
  { path: 'perfilnicolas', component: PerfilnicolasComponent },
  { path: 'viajecontruye', component: ViajecontruyeComponent },
  { path: 'viajedecide', component: ViajedecideComponent },
  { path: 'viajecrece', component: ViajecreceComponent },
  { path: 'viajedescubre', component: ViajedescubreComponent },
  { path: 'viajeenriquece', component: ViajeenriqueceComponent },
  { path: 'Servicios', component: CarrouselServiciosComponent},
  { path: 'Portafolio', component: SliderportafolioComponent},
  { path: 'Equipo', component: EquipoComponent}, 
  { path: 'Contacto', component: ContactoComponent},
  { path: 'Inicio', component: InicioTransformacionComponent},
  { path: 'viajecreativo', component: ViajecreativoComponent},
 { path: 'politicas', component:PoliticasComponent},
 { path: 'sliderpt', component: SliderptComponent},
 { path: 'pt3', component:Ptv3Component},
 { path: 'Accordion', component:AccordionComponent},
 { path: 'Home' , component:HomeComponent},
 { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
