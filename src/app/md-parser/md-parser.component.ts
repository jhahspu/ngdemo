import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-md-parser',
  templateUrl: './md-parser.component.html',
  styles: [
  ]
})
export class MdParserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  markdown = `# Markdown __rulez__!
---

## Syntax highlight

\`\`\`typescript
const language = 'typescript';
\`\`\`

---

\`\`\`docker
FROM node:15.4

WORKDIR /app
COPY package*.json .
RUN npm install

COPY . .

CMD npm run start:dev

\`\`\`


---


\`\`\`go
package main

func main() {

}
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;

}
