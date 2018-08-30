/// <reference path="./../typings/index.d.ts" />

import { NgModule } from '@angular/core';
import 'prismjs';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-clike.min.js';
import 'prismjs/components/prism-c.min.js';
import 'prismjs/components/prism-cpp.min.js';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-scala.min.js';
import 'prismjs/components/prism-dart.min.js';
import 'prismjs/components/prism-diff.min.js';
import 'prismjs/components/prism-go.min.js';
import 'prismjs/components/prism-swift.min.js';
import 'prismjs/components/prism-erlang.min.js';
import 'prismjs/components/prism-elixir.min.js';
import 'prismjs/components/prism-kotlin.min.js';
import 'prismjs/components/prism-haskell.min.js';
import 'prismjs/components/prism-objectivec.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-sass.min.js';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-ruby.min.js';
import 'prismjs/components/prism-rust.min.js';
import 'prismjs/components/prism-python.min.js';
import 'prismjs/components/prism-scheme.min.js';
import 'prismjs/components/prism-sql.min.js';
import 'prismjs/components/prism-r.min.js';
import 'prismjs/components/prism-nginx.min.js';
import 'prismjs/components/prism-docker.min.js';
import 'prismjs/components/prism-yaml.min.js';



import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CodePreviewModule } from './code-preview/code-preview.module';

@NgModule({
  imports: [
    BrowserModule,
    CodePreviewModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {

  constructor() {

  }

}
