import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCodeUploaderComponent } from './qr-code-uploader.component';

describe('QrCodeUploaderComponent', () => {
  let component: QRCodeUploaderComponent;
  let fixture: ComponentFixture<QRCodeUploaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QRCodeUploaderComponent]
    });
    fixture = TestBed.createComponent(QRCodeUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
