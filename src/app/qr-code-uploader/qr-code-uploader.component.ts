import { Component, ElementRef, ViewChild } from '@angular/core';
import { BrowserMultiFormatReader, DecodeHintType } from '@zxing/library';
import { Patient } from '../model/patient-model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-qr-code-uploader',
  templateUrl: './qr-code-uploader.component.html',
  styleUrls: ['./qr-code-uploader.component.css']
})
export class QRCodeUploaderComponent {
  @ViewChild('video', { static: false }) videoElement!: ElementRef;
  scannedValue: string  = '';
  isQrAvailable : boolean = false;
  qrCodeForm!: FormGroup;

  startScanner(): void {
    this.isQrAvailable = false;
    const codeReader = new BrowserMultiFormatReader();
    const hints = new Map<DecodeHintType, any>();
    hints.set(DecodeHintType.TRY_HARDER, true);

    codeReader
      .decodeOnceFromVideoDevice(undefined, this.videoElement.nativeElement)
      .then(result => {
        this.scannedValue = result.getText();
        if(this.scannedValue && this.scannedValue !=''){
          this.decodeQR(this.scannedValue)
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
 decodeQR(qrString: string): void {
  this.isQrAvailable = true;
  let  patient : Patient = JSON.parse(qrString);
  this.qrCodeForm = new FormGroup({
    firstName: new FormControl(patient.firstName),
    lastName:  new FormControl(patient.lastName),
    gender: new FormControl(patient.gender),
    dob:  new FormControl(patient.dob),
    address:  new FormControl(patient.address),
    city: new FormControl(patient.city),
    state:  new FormControl(patient.state),
    zipcode:  new FormControl(patient.zipcode)
  });
 }
}
