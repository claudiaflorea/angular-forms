import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-rf',
  templateUrl: './vehicle-rf.component.html',
  styleUrls: ['./vehicle-rf.component.scss']
})
export class VehicleRfComponent {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
        ownerName: ['', Validators.required],
        contactNumber: ['', Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")],
        ownerEmail: ['', Validators.required, Validators.email],
        regNo: ['', Validators.required, Validators.pattern('[A-Za-z]{1,3}-[A-Za-z]{1,2}-[0-9]{1,4}')],
        address: ['', Validators.required],
        model: ['', Validators.required, Validators.maxLength(10)],
        color: ['', Validators.requiredTrue],
        year: ['', Validators.requiredTrue, Validators.pattern('/\-?\d*\.?\d{1,2}/'), Validators.min(2012), Validators.max(2022)]
    });
  } 

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    alert('You are about to register a new vehicle  :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
