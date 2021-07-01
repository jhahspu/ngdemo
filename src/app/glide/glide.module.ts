import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlideComponent } from './glide.component';
import { NgxGlideModule } from 'ngx-glide';

@NgModule({
  declarations: [
    GlideComponent
  ],
  imports: [
    CommonModule,
    NgxGlideModule
  ]
})
export class GlideModule { }
