import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselServiciosComponent } from './carrousel-servicios.component';

describe('CarrouselServiciosComponent', () => {
  let component: CarrouselServiciosComponent;
  let fixture: ComponentFixture<CarrouselServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrouselServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
