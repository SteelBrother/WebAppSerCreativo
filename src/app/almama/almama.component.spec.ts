import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmamaComponent } from './almama.component';

describe('AlmamaComponent', () => {
  let component: AlmamaComponent;
  let fixture: ComponentFixture<AlmamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlmamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
