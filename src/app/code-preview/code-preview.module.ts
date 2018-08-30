import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CodePreviewComponent } from './code-preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CodePreviewComponent,
  ],
  entryComponents: [],
  exports: [
    CodePreviewComponent,
  ],
})
export class CodePreviewModule { }
