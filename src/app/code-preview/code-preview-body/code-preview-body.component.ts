import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from 'lodash-es';

export const SUPPORTED_LANGUAGES = [
  'bash',
  'c',
  'clike',
  'cpp',
  'dart',
  'diff',
  'docker',
  'elixir',
  'erlang',
  'go',
  'haskell',
  'html',
  'java',
  'kotlin',
  'nginx',
  'objectivec',
  'python',
  'r',
  'ruby',
  'rust',
  'sass',
  'scala',
  'scheme',
  'scss',
  'sql',
  'swift',
  'typescript',
  'xml',
  'yaml',
];

@Component({
  selector: 'cp-code-preview-body',
  templateUrl: './code-preview-body.component.html',
  styleUrls: ['./code-preview-body.component.scss']
})
export class CodePreviewBodyComponent implements OnChanges {

  @Input() language = 'bash';
  @Input() codeText: string;

  code: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.codeText || changes.language) {
      console.log(changes.codeText);
      this.code = _.clone(this.codeText);
    }
  }

}
