import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'ytPipe'
})
export class YtPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
