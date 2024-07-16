import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneteanosotrosComponent } from './uneteanosotros.component';

describe('UneteanosotrosComponent', () => {
  let component: UneteanosotrosComponent;
  let fixture: ComponentFixture<UneteanosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UneteanosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UneteanosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
