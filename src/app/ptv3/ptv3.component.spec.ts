import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptv3Component } from './ptv3.component';

describe('Ptv3Component', () => {
  let component: Ptv3Component;
  let fixture: ComponentFixture<Ptv3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ptv3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
