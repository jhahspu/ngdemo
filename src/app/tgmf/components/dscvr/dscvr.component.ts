import { Component, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';
import { take } from 'rxjs/operators';
import { TGMF } from '../../tgmf.interface';
import { TgmfService } from '../../tgmf.service';

@Component({
  selector: 'tgmf-dscvr',
  templateUrl: './dscvr.component.html',
  styles: [
  ]
})
export class DscvrComponent {

  dscvrTitles!: TGMF[];
  dMvs!: TGMF[][];

  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  constructor(
    private tgmfService: TgmfService
  ) {
    this.getDscvrTitles();
  }

  private createGroups(arr: TGMF[], num: number) {
    const perGroup = Math.ceil(arr.length / num);
    return new Array(num)
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

  async getDscvrTitles() {
    if (sessionStorage.getItem('dscvr')) {
      this.dscvrTitles = JSON.parse(sessionStorage.getItem('dscvr') || '{}');
      this.dMvs = this.createGroups(this.dscvrTitles, 10);
    } else {
      await this.tgmfService.getDiscover()
        .pipe(take(1))
        .subscribe(data => {
          console.log(data.results)
            this.dscvrTitles = data.results;
            sessionStorage.setItem('dscvr', JSON.stringify(this.dscvrTitles));
            this.dMvs = this.createGroups(this.dscvrTitles, 10);
          }
        )
    }
  }
}
