import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
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
export class TgmfComponent implements OnInit, AfterViewInit {

  rndTitles!: TGMF[];
  displayTitles!: TGMF[];
  gMvs!: TGMF[][];
  slides: any;
  iniWidth!: number;
  perView: number = 1;

  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;
  @HostListener('window:resize') getScreenSize(){
    this.calcSlides(window.innerWidth);
  }

  constructor(
    private tgmfService: TgmfService
  ) {
    this.iniWidth = window.innerWidth;
    console.log(`[Initial Width: ] ${this.iniWidth}`);
  }

  ngOnInit() {
    
  }

  async ngAfterViewInit() {
    await this.getRndTitles()
      .finally(() => this.getScreenSize());
  }

  private calcSlides(width: number) {
    if (width < 768) {
      this.slides = Math.ceil(this.displayTitles.length / 2);
    } else {
      this.slides = Math.ceil(this.displayTitles.length / 4);
    }

    this.gMvs = this.createGroups(this.displayTitles, this.slides);

    this.ngxGlide.recreate();
    
    // console.log(this.gMvs);
    // console.log(`[Screen] width: ${width} slides: ${this.slides}`);
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

      console.log(`[LocalStorage]: `, this.displayTitles);
    } else {
      await this.tgmfService.getRandom()
        .pipe(take(1))
        .subscribe(data => {
            this.rndTitles = data;
            localStorage.setItem('mvs', JSON.stringify(this.rndTitles));
            this.displayTitles = this.rndTitles.slice(0, 20);

            console.log(`[API]: `, this.displayTitles);
          }
        )
    }
  }
}
