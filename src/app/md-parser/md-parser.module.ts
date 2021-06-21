import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdParserComponent } from './md-parser.component';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-docker.min.js';
import 'prismjs/components/prism-go.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@NgModule({
  declarations: [
    MdParserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule.forRoot()
  ]
})
export class MdParserModule { }
