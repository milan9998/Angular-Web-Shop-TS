import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesdetailsComponent } from './clothesdetails.component';

describe('ClothesdetailsComponent', () => {
  let component: ClothesdetailsComponent;
  let fixture: ComponentFixture<ClothesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClothesdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
