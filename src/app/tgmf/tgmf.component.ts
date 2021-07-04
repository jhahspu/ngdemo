import { Component, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';
import { take } from 'rxjs/operators';
import { TGMF } from './tgmf.interface';
import { TgmfService } from './tgmf.service';

@Component({
  selector: 'app-tgmf',
  templateUrl: './tgmf.component.html',
  styles: [
  ]
})
export class TgmfComponent {

  rndTitles!: TGMF[];
  displayTitles!: TGMF[];
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
      this.rndTitles = JSON.parse(localStorage.getItem('mvs') || '{}');
      this.displayTitles = this.rndTitles.slice(0, 20);
      this.gMvs = this.createGroups(this.displayTitles, this.displayTitles.length);
    } else {
      await this.tgmfService.getRandom()
        .pipe(take(1))
        .subscribe(data => {
            this.rndTitles = data;
            localStorage.setItem('mvs', JSON.stringify(this.rndTitles));
            this.displayTitles = this.rndTitles.slice(0, 20);
            this.gMvs = this.createGroups(this.displayTitles, this.displayTitles.length);
          }
        )
    }
  }
}
