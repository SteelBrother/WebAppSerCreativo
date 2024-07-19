import { Component, OnInit, Renderer2, Inject, PLATFORM_ID, Input, HostBinding } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() title: string = ''; // Inicializa con un valor vacío
  isOpen: boolean = false;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadScriptsSequentially();
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(document.querySelector('.accordion'), 'sticky');
    } else {
      this.renderer.removeClass(document.querySelector('.accordion'), 'sticky');
    }
  }

  private scripts: string[] = [
    'assets/js/accordion.js' // Asegúrate de que este archivo esté correcto y necesario
  ];

  loadScriptsSequentially() {
    let promise = Promise.resolve();
    
    this.scripts.forEach(scriptSrc => {
      promise = promise.then(() => this.loadScript(scriptSrc));
    });
  }

  loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.src = src;
      script.onload = () => {
        console.log(`${src} loaded successfully`);
        resolve();
      };
      script.onerror = (error: any) => reject(error);
      this.renderer.appendChild(document.body, script);
    });
  }
}
