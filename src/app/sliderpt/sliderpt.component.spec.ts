import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderptComponent } from './sliderpt.component';

describe('SliderptComponent', () => {
  let component: SliderptComponent;
  let fixture: ComponentFixture<SliderptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
