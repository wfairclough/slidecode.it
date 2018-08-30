import { Component } from '@angular/core';

import { SUPPORTED_LANGUAGES } from './code-preview/code-preview-body/code-preview-body.component';
import { CodePreviewMode } from './code-preview/code-preview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SlideCode.it';
  language = 'typescript';
  supportedLanguages = SUPPORTED_LANGUAGES;
  editMode = true;

  get mode(): CodePreviewMode {
    return this.editMode ? 'edit' : 'preview';
  }

  toggleMode() {
    this.editMode = !this.editMode;
  }
}
