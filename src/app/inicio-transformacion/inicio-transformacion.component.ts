import { Component, OnInit, Renderer2, Inject, PLATFORM_ID,ViewEncapsulation  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-inicio-transformacion',
  templateUrl: './inicio-transformacion.component.html',
  styleUrl: './inicio-transformacion.component.css',
  encapsulation: ViewEncapsulation.Emulated 
})
export class InicioTransformacionComponent implements OnInit{
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
       this.loadScript();
    }
  }

  loadScript() {
    const script = this.renderer.createElement('script');
    script.src = 'assets/js/scriptinicio.js';
    script.onload = () => {
      console.log('Script loaded successfully');
    };
    this.renderer.appendChild(document.body, script);
  }
}
