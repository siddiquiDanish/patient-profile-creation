import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { QRCodeUploaderComponent } from './qr-code-uploader/qr-code-uploader.component';

const routes: Routes = [

  { path: 'generate', component: QrCodeGeneratorComponent },
  { path: 'upload', component:  QRCodeUploaderComponent },
  { path: '', redirectTo: '/generate', pathMatch: 'full' },
  { path: '**', redirectTo: '/generate' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
