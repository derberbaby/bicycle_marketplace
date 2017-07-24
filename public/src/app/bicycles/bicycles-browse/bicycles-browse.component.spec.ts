import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicyclesBrowseComponent } from './bicycles-browse.component';

describe('BicyclesBrowseComponent', () => {
  let component: BicyclesBrowseComponent;
  let fixture: ComponentFixture<BicyclesBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicyclesBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicyclesBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
