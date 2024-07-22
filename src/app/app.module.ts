import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioParallaxComponent } from './inicio-parallax/inicio-parallax.component';
import { InicioParallaxtwoComponent } from './inicio-parallaxtwo/inicio-parallaxtwo.component';
import { MenuComponent } from './menu/menu.component';
import { InicioTransformacionComponent } from './inicio-transformacion/inicio-transformacion.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ImgLabComponent } from './img-lab/img-lab.component';
import { FooterComponent } from './footer/footer.component';
import { BtnsabermasComponent } from './btnsabermas/btnsabermas.component';
import { CarrouselServiciosComponent } from './carrousel-servicios/carrousel-servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EquipoComponent } from './equipo/equipo.component';
import { SliderProyectosComponent } from './slider-proyectos/slider-proyectos.component';
import { SliderportafolioComponent } from './sliderportafolio/sliderportafolio.component';
import { BtnwaComponent } from './btnwa/btnwa.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NeohomeComponent } from './neohome/neohome.component';
import { InferjsComponent } from './inferjs/inferjs.component';
import { AlmamaComponent } from './almama/almama.component';
import { GalacticnftComponent } from './galacticnft/galacticnft.component';
import { HugospizzaComponent } from './hugospizza/hugospizza.component';
import { ViajedescubreComponent } from './viajedescubre/viajedescubre.component';
import { ViajedecideComponent } from './viajedecide/viajedecide.component';
import { ViajecontruyeComponent } from './viajecontruye/viajecontruye.component';
import { ViajecreceComponent } from './viajecrece/viajecrece.component';
import { ViajeenriqueceComponent } from './viajeenriquece/viajeenriquece.component';
import { PerfilgioComponent } from './perfilgio/perfilgio.component';
import { PerfilnicolasComponent } from './perfilnicolas/perfilnicolas.component';
import { UneteanosotrosComponent } from './uneteanosotros/uneteanosotros.component';
import { ContactolabComponent } from './contactolab/contactolab.component';
import { ViajecreativoComponent } from './viajecreativo/viajecreativo.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { SliderptComponent } from './sliderpt/sliderpt.component';
import { Ptv3Component } from './ptv3/ptv3.component';
import { AccordionComponent } from './accordion/accordion.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioParallaxComponent,
    InicioParallaxtwoComponent,
    MenuComponent,
    InicioTransformacionComponent,
    PortafolioComponent,
    ImgLabComponent,
    FooterComponent,
    BtnsabermasComponent,
    CarrouselServiciosComponent,
    ContactoComponent,
    EquipoComponent,
    SliderProyectosComponent,
    SliderportafolioComponent,
    BtnwaComponent,
    ConocenosComponent,
    InicioComponent,
    NeohomeComponent,
    InferjsComponent,
    AlmamaComponent,
    GalacticnftComponent,
    HugospizzaComponent,
    ViajedescubreComponent,
    ViajedecideComponent,
    ViajecontruyeComponent,
    ViajecreceComponent,
    ViajeenriqueceComponent,
    PerfilgioComponent,
    PerfilnicolasComponent,
    UneteanosotrosComponent,
    ContactolabComponent,
    ViajecreativoComponent,
    PoliticasComponent,
    SliderptComponent,
    Ptv3Component,
    AccordionComponent,
    HomeComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
