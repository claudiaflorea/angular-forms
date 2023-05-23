import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTdfComponent } from './vehicle-tdf.component';

describe('VehicleTdfComponent', () => {
  let component: VehicleTdfComponent;
  let fixture: ComponentFixture<VehicleTdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleTdfComponent]
    });
    fixture = TestBed.createComponent(VehicleTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
