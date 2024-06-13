import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioTransformacionComponent } from './inicio-transformacion.component';

describe('InicioTransformacionComponent', () => {
  let component: InicioTransformacionComponent;
  let fixture: ComponentFixture<InicioTransformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioTransformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioTransformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
