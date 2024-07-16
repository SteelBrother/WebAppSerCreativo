import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajecontruyeComponent } from './viajecontruye.component';

describe('ViajecontruyeComponent', () => {
  let component: ViajecontruyeComponent;
  let fixture: ComponentFixture<ViajecontruyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViajecontruyeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajecontruyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
