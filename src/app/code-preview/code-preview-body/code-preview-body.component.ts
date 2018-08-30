import { Component, Input } from '@angular/core';

export const SUPPORTED_LANGUAGES = [
  'bash',
  'clike',
  'c',
  'cpp',
  'java',
  'scala',
  'dart',
  'diff',
  'go',
  'swift',
  'erlang',
  'elixir',
  'kotlin',
  'haskell',
  'objectivec',
  'typescript',
  'sass',
  'scss',
  'ruby',
  'rust',
  'python',
  'scheme',
  'sql',
  'r',
  'nginx',
  'docker',
  'yaml',
];

@Component({
  selector: 'cp-code-preview-body',
  templateUrl: './code-preview-body.component.html',
  styleUrls: ['./code-preview-body.component.scss']
})
export class CodePreviewBodyComponent {

  @Input() language = 'bash';
  @Input() codeText: string;

}
