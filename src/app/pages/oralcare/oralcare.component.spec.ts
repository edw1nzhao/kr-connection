import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralcareComponent } from './oralcare.component';

describe('OralcareComponent', () => {
  let component: OralcareComponent;
  let fixture: ComponentFixture<OralcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OralcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OralcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
