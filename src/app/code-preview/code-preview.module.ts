import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';

import { CodePreviewBodyComponent } from './code-preview-body/code-preview-body.component';
import { CodePreviewComponent } from './code-preview.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CodePreviewComponent,
    CodePreviewBodyComponent,
  ],
  entryComponents: [],
  exports: [
    CodePreviewComponent,
    CodePreviewBodyComponent,
  ],
})
export class CodePreviewModule { }
