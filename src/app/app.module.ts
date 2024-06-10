import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioParallaxComponent } from './inicio-parallax/inicio-parallax.component';
import { InicioParallaxtwoComponent } from './inicio-parallaxtwo/inicio-parallaxtwo.component';
import { AnimacionParticulasComponent } from './animacion-particulas/animacion-particulas.component';
import { SeccionesparallaxComponent } from './seccionesparallax/seccionesparallax.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioParallaxComponent,
    InicioParallaxtwoComponent,
    AnimacionParticulasComponent,
    SeccionesparallaxComponent,
    MenuComponent
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
