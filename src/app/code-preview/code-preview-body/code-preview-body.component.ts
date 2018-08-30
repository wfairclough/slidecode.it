import { Component, Input } from '@angular/core';

@Component({
  selector: 'cp-code-preview-body',
  templateUrl: './code-preview-body.component.html',
  styleUrls: ['./code-preview-body.component.scss']
})
export class CodePreviewBodyComponent {

  @Input() language = 'bash';
  @Input() codeText: string;

}
