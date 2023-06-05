import { Component } from '@angular/core';
import * as QRCode from 'qrcode';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'patient-creation';
  qrCodeForm!: FormGroup;
  qrCodeData!: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.qrCodeForm = new FormGroup({
      firstName: new FormControl(),
      lastName:  new FormControl(),
      gender: new FormControl(),
      dob:  new FormControl(),
      address:  new FormControl(),
      city: new FormControl(),
      state:  new FormControl(),
      zipcode:  new FormControl()
    });
  }

  generateQRCode() {
    if (this.qrCodeForm.invalid) {
      return;
    }

    const formValue = this.qrCodeForm.value;
    const data = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      gender: formValue.gender,
      dob:  formValue.dob,
      address: formValue.address,
      city: formValue.city,
      state:  formValue.state,
      zipcode:  formValue.zipcode
    };

    const jsonData = JSON.stringify(data);

    QRCode.toDataURL(jsonData)
      .then(url => {
        this.qrCodeData = url;
        console.log(url);
      })
      .catch(err => {
        console.error('Error generating QR code:', err);
      });
  }

  downloadQRCode() {
    const link = document.createElement('a');
    link.href = this.qrCodeData;
    link.download =  this.qrCodeForm.value.firstName+'.png';
    link.click();
  }

}
