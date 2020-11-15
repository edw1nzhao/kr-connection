import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbarComponent } from './shopbar.component';

describe('ShopbarComponent', () => {
  let component: ShopbarComponent;
  let fixture: ComponentFixture<ShopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
