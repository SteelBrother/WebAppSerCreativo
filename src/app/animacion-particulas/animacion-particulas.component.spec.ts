import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacionParticulasComponent } from './animacion-particulas.component';

describe('AnimacionParticulasComponent', () => {
  let component: AnimacionParticulasComponent;
  let fixture: ComponentFixture<AnimacionParticulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimacionParticulasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimacionParticulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
