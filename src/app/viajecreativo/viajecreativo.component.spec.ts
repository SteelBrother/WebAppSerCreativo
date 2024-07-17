import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajecreativoComponent } from './viajecreativo.component';

describe('ViajecreativoComponent', () => {
  let component: ViajecreativoComponent;
  let fixture: ComponentFixture<ViajecreativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViajecreativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajecreativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
