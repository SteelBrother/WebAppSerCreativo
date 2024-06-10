import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioParallaxComponent } from './inicio-parallax.component';

describe('InicioParallaxComponent', () => {
  let component: InicioParallaxComponent;
  let fixture: ComponentFixture<InicioParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioParallaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
