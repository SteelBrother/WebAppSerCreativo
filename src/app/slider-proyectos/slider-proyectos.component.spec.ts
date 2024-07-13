import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProyectosComponent } from './slider-proyectos.component';

describe('SliderProyectosComponent', () => {
  let component: SliderProyectosComponent;
  let fixture: ComponentFixture<SliderProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
