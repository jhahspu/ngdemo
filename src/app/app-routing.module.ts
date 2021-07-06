import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlideComponent } from './glide/glide.component';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollerComponent } from './infinite-scroller/infinite-scroller.component';
import { MdParserComponent } from './md-parser/md-parser.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MoreComponent } from './tgmf/more/more.component';
import { TgmfComponent } from './tgmf/tgmf.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {animation: 'HomePage'} 
  },
  {
    path: "md-parser",
    component: MdParserComponent,
    data: {animation: 'MDParser'} 

  },
  {
    path: "infinite-scroller",
    component: InfiniteScrollerComponent,
    data: {animation: 'InfiniteScroller'} 
  },
  {
    path: "glide",
    component: GlideComponent,
    data: {animation: 'Glide'} 
  },
  {
    path: "tgmf",
    children: [
      { path: "", component: TgmfComponent, data: {animation: 'TGMF'} },
      { path: ":id", component: MoreComponent, data: {animation: 'TGMFDetail'} }
    ]
    
  },

  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
