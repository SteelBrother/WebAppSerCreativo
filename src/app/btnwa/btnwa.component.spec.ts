import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnwaComponent } from './btnwa.component';

describe('BtnwaComponent', () => {
  let component: BtnwaComponent;
  let fixture: ComponentFixture<BtnwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnwaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
