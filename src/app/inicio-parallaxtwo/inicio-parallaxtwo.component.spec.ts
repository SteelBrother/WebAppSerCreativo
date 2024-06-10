import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioParallaxtwoComponent } from './inicio-parallaxtwo.component';

describe('InicioParallaxtwoComponent', () => {
  let component: InicioParallaxtwoComponent;
  let fixture: ComponentFixture<InicioParallaxtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioParallaxtwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioParallaxtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
