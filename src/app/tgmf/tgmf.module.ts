import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TgmfComponent } from './tgmf.component';
import { TgmfService } from './tgmf.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxGlideModule } from 'ngx-glide';
import { SafeStylePipe } from './bgimage.pipe';
import { RndComponent } from './components/rnd/rnd.component';
import { DscvrComponent } from './components/dscvr/dscvr.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    TgmfComponent,
    SafeStylePipe,
    RndComponent,
    DscvrComponent,
    CardComponent
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
