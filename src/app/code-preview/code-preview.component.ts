import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export type CodePreviewMode = 'edit' | 'preview';

@Component({
  selector: 'cp-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss']
})
export class CodePreviewComponent implements OnInit, OnChanges {

  @Input() mode: CodePreviewMode = 'edit';
  @Input() language = 'typescript'; // SUPPORTED_LANGUAGES[0];

  filename = '.bash_rc';
  code = ``;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mode) {
      console.log(`Code`, this.code);
    }
  }

  log() {
    console.log(this.code);
  }
}
