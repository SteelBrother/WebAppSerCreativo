import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajecreceComponent } from './viajecrece.component';

describe('ViajecreceComponent', () => {
  let component: ViajecreceComponent;
  let fixture: ComponentFixture<ViajecreceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViajecreceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajecreceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
