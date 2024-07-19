import { Component, OnInit, Renderer2, Inject, PLATFORM_ID,ViewEncapsulation  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sliderpt',
  templateUrl: './sliderpt.component.html',
  styleUrl: './sliderpt.component.css'
})
export class SliderptComponent implements OnInit{
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }
  private scripts: string[] = [
    'assets/js/sliderptv2.js',
    'assets/js/jquery.min.js',
    'assets/js/owl.carousel.min.js', // Añade más archivos aquí
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadScriptsSequentially();
    }
  }
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

