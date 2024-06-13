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
    EquipoComponent
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
