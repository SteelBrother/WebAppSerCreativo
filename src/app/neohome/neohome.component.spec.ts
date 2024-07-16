import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeohomeComponent } from './neohome.component';

describe('NeohomeComponent', () => {
  let component: NeohomeComponent;
  let fixture: ComponentFixture<NeohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NeohomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
