import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferjsComponent } from './inferjs.component';

describe('InferjsComponent', () => {
  let component: InferjsComponent;
  let fixture: ComponentFixture<InferjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InferjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InferjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
