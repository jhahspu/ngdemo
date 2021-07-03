import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlideComponent } from './glide/glide.component';
import { HomeComponent } from './home/home.component';
import { InfiniteScrollerComponent } from './infinite-scroller/infinite-scroller.component';
import { MdParserComponent } from './md-parser/md-parser.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { TgmfComponent } from './tgmf/tgmf.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "md-parser",
    component: MdParserComponent
  },
  {
    path: "infinite-scroller",
    component: InfiniteScrollerComponent
  },
  {
    path: "glide",
    component: GlideComponent
  },
  {
    path: "tgmf",
    component: TgmfComponent
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
