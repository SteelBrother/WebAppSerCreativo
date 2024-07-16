import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeenriqueceComponent } from './viajeenriquece.component';

describe('ViajeenriqueceComponent', () => {
  let component: ViajeenriqueceComponent;
  let fixture: ComponentFixture<ViajeenriqueceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViajeenriqueceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajeenriqueceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
