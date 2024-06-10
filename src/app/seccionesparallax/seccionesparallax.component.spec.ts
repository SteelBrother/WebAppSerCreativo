import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesparallaxComponent } from './seccionesparallax.component';

describe('SeccionesparallaxComponent', () => {
  let component: SeccionesparallaxComponent;
  let fixture: ComponentFixture<SeccionesparallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccionesparallaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionesparallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
