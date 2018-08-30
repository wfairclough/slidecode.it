import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cp-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss']
})
export class CodePreviewComponent implements OnInit {

  filename = '.bash_rc';
  codeText = `
  // comment of something

  class ThisClass {
    something(boid) {

    }
  }
  `;

  constructor() { }

  ngOnInit() {
  }

}
