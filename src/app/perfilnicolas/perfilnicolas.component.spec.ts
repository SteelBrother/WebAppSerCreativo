import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilnicolasComponent } from './perfilnicolas.component';

describe('PerfilnicolasComponent', () => {
  let component: PerfilnicolasComponent;
  let fixture: ComponentFixture<PerfilnicolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilnicolasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilnicolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
