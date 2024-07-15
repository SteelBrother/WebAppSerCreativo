import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderportafolioComponent } from './sliderportafolio.component';

describe('SliderportafolioComponent', () => {
  let component: SliderportafolioComponent;
  let fixture: ComponentFixture<SliderportafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderportafolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderportafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
