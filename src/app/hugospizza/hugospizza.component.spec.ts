import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugospizzaComponent } from './hugospizza.component';

describe('HugospizzaComponent', () => {
  let component: HugospizzaComponent;
  let fixture: ComponentFixture<HugospizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HugospizzaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HugospizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
