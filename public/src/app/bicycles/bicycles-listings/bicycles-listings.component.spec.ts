import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicyclesListingsComponent } from './bicycles-listings.component';

describe('BicyclesListingsComponent', () => {
  let component: BicyclesListingsComponent;
  let fixture: ComponentFixture<BicyclesListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicyclesListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicyclesListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
