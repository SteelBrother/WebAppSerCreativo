import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajedecideComponent } from './viajedecide.component';

describe('ViajedecideComponent', () => {
  let component: ViajedecideComponent;
  let fixture: ComponentFixture<ViajedecideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViajedecideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajedecideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
