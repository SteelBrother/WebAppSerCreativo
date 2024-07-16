import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajedescubreComponent } from './viajedescubre.component';

describe('ViajedescubreComponent', () => {
  let component: ViajedescubreComponent;
  let fixture: ComponentFixture<ViajedescubreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViajedescubreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajedescubreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
