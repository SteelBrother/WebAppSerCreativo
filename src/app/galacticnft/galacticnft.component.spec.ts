import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticnftComponent } from './galacticnft.component';

describe('GalacticnftComponent', () => {
  let component: GalacticnftComponent;
  let fixture: ComponentFixture<GalacticnftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalacticnftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalacticnftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
