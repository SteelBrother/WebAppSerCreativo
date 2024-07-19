import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ptv3',
  templateUrl: './ptv3.component.html',
  styleUrls: ['./ptv3.component.css', './base.css', './demo1.css', './lty4rfv.css']
})
export class Ptv3Component implements OnInit {
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) { }

  private scripts: string[] = [
    'assets/js/index.js',
    'assets/js/galleryItem.js',
    'assets/js/galleryController.js',
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
