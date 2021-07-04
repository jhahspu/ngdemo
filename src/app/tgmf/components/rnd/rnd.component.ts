import { Component, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';
import { take } from 'rxjs/operators';
import { TGMF } from '../../tgmf.interface';
import { TgmfService } from '../../tgmf.service';

@Component({
  selector: 'tgmf-rnd',
  templateUrl: './rnd.component.html',
  styles: [
  ]
})
export class RndComponent {

  rndTitles!: TGMF[];
  gMvs!: TGMF[][];

  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  constructor(
    private tgmfService: TgmfService
  ) {
    this.getRndTitles();
  }

  private createGroups(arr: TGMF[], num: number) {
    const perGroup = Math.ceil(arr.length / num);
    return new Array(num)
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

  async getRndTitles() {
    if (localStorage.getItem('mvs')) {
      localStorage.removeItem('mvs');
    }

    if (sessionStorage.getItem('mvs')) {
      this.rndTitles = JSON.parse(sessionStorage.getItem('mvs') || '{}');
      this.gMvs = this.createGroups(this.rndTitles, 10);
    } else {
      await this.tgmfService.getRandom()
        .pipe(take(1))
        .subscribe(data => {
            this.rndTitles = data;
            sessionStorage.setItem('mvs', JSON.stringify(this.rndTitles));
            this.gMvs = this.createGroups(this.rndTitles, 10);
          }
        )
    }
  }

}
