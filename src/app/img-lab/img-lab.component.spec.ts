import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLabComponent } from './img-lab.component';

describe('ImgLabComponent', () => {
  let component: ImgLabComponent;
  let fixture: ComponentFixture<ImgLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
