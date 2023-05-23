import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-tdf',
  templateUrl: './vehicle-tdf.component.html',
  styleUrls: ['./vehicle-tdf.component.scss']
})
export class VehicleTdfComponent {
  public  ownerName:string   = "";
  public  contactNr:string   = "";
  public  ownerEmail:string   = "";
  public  regNo:string   = "";
  public  address:string   = "";

  public submit_click():void {
      // make an ajax call to send data to server
      alert("Vehicle Details are registered.");
  }
}
