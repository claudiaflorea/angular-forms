import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRfComponent } from './vehicle-rf.component';

describe('VehicleRfComponent', () => {
  let component: VehicleRfComponent;
  let fixture: ComponentFixture<VehicleRfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleRfComponent]
    });
    fixture = TestBed.createComponent(VehicleRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
