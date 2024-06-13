import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsabermasComponent } from './btnsabermas.component';

describe('BtnsabermasComponent', () => {
  let component: BtnsabermasComponent;
  let fixture: ComponentFixture<BtnsabermasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnsabermasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnsabermasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
