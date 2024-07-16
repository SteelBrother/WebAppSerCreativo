import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilgioComponent } from './perfilgio.component';

describe('PerfilgioComponent', () => {
  let component: PerfilgioComponent;
  let fixture: ComponentFixture<PerfilgioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilgioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilgioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
