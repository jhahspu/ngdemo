import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TgmfComponent } from './tgmf.component';
import { TgmfService } from './tgmf.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxGlideModule } from 'ngx-glide';
import { SafeStylePipe } from './bgimage.pipe';

@NgModule({
  declarations: [
    TgmfComponent,
    SafeStylePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxGlideModule
  ],
  providers: [
    TgmfService
  ]
})

export class TgmfModule { }
