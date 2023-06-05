import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeUploaderComponent } from './qr-code-uploader.component';

describe('QrCodeUploaderComponent', () => {
  let component: QrCodeUploaderComponent;
  let fixture: ComponentFixture<QrCodeUploaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrCodeUploaderComponent]
    });
    fixture = TestBed.createComponent(QrCodeUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
