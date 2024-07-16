import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactolabComponent } from './contactolab.component';

describe('ContactolabComponent', () => {
  let component: ContactolabComponent;
  let fixture: ComponentFixture<ContactolabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactolabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
