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
import { RouterModule } from '@angular/router';
import { MoreComponent } from './more/more.component';
import { NgxStarsModule } from 'ngx-stars';
import { YtPipe } from './yt.pipe';

@NgModule({
  declarations: [
    TgmfComponent,
    SafeStylePipe,
    RndComponent,
    DscvrComponent,
    CardComponent,
    MoreComponent,
    YtPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxStarsModule,
    NgxGlideModule
  ],
  providers: [
    TgmfService
  ]
})

export class TgmfModule { }
