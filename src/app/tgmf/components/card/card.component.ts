import { Component, Input } from '@angular/core';
import { TGMF } from '../../tgmf.interface';

@Component({
  selector: 'tgmf-card',
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input() movie!: TGMF;

}
