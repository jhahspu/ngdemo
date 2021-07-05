import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { TGMF } from '../tgmf.interface';
import { TgmfService } from '../tgmf.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styles: [
  ]
})
export class MoreComponent implements OnInit {

  mid!: string;
  movie!: TGMF;
  starz!: number;
  trailers!: any[];

  constructor(
    private route: ActivatedRoute,
    private tgmfService: TgmfService
  ) {}

  ngOnInit(): void {
    this.mid = this.route.snapshot.params.id;
    this.tgmfService.getDetails(this.mid)
      .pipe(take(1))
      .subscribe(data => {
        this.movie = data;
        if (this.movie.vote_average) {

          this.starz = (this.movie.vote_average / 10) * 5;
        } else {
          this.starz = 0;
        }
      })
    this.tgmfService.getTrailers(this.mid)
    .pipe(take(1))
    .subscribe(data => {
      this.trailers = data['results']
    })
  }

}
