import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicyclesComponent } from './bicycles.component';

describe('BicyclesComponent', () => {
  let component: BicyclesComponent;
  let fixture: ComponentFixture<BicyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
