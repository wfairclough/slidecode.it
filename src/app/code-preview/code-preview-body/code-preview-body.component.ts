import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as actionscript from 'highlight.js/lib/languages/actionscript';
import * as apache from 'highlight.js/lib/languages/apache';
import * as applescript from 'highlight.js/lib/languages/applescript';
import * as armasm from 'highlight.js/lib/languages/armasm';
import * as bash from 'highlight.js/lib/languages/bash';
import * as basic from 'highlight.js/lib/languages/basic';
import * as clojure from 'highlight.js/lib/languages/clojure';
import * as cmake from 'highlight.js/lib/languages/cmake';
import * as cpp from 'highlight.js/lib/languages/cpp';
import * as cs from 'highlight.js/lib/languages/cs';
import * as csp from 'highlight.js/lib/languages/csp';
import * as css from 'highlight.js/lib/languages/css';
import * as d from 'highlight.js/lib/languages/d';
import * as dart from 'highlight.js/lib/languages/dart';
import * as diff from 'highlight.js/lib/languages/diff';
import * as dockerfile from 'highlight.js/lib/languages/dockerfile';
import * as dos from 'highlight.js/lib/languages/dos';
import * as dts from 'highlight.js/lib/languages/dts';
import * as elixir from 'highlight.js/lib/languages/elixir';
import * as elm from 'highlight.js/lib/languages/elm';
import * as erb from 'highlight.js/lib/languages/erb';
import * as erlang from 'highlight.js/lib/languages/erlang';
import * as fortran from 'highlight.js/lib/languages/fortran';
import * as fsharp from 'highlight.js/lib/languages/fsharp';
import * as go from 'highlight.js/lib/languages/go';
import * as gradle from 'highlight.js/lib/languages/gradle';
import * as groovy from 'highlight.js/lib/languages/groovy';
import * as haml from 'highlight.js/lib/languages/haml';
import * as handlebars from 'highlight.js/lib/languages/handlebars';
import * as haskell from 'highlight.js/lib/languages/haskell';
import * as http from 'highlight.js/lib/languages/http';
import * as ini from 'highlight.js/lib/languages/ini';
import * as java from 'highlight.js/lib/languages/java';
import * as javascript from 'highlight.js/lib/languages/javascript';
import * as json from 'highlight.js/lib/languages/json';
import * as kotlin from 'highlight.js/lib/languages/kotlin';
import * as less from 'highlight.js/lib/languages/less';
import * as lisp from 'highlight.js/lib/languages/lisp';
import * as lua from 'highlight.js/lib/languages/lua';
import * as makefile from 'highlight.js/lib/languages/makefile';
import * as markdown from 'highlight.js/lib/languages/markdown';
import * as nginx from 'highlight.js/lib/languages/nginx';
import * as objectivec from 'highlight.js/lib/languages/objectivec';
import * as ocaml from 'highlight.js/lib/languages/ocaml';
import * as perl from 'highlight.js/lib/languages/perl';
import * as php from 'highlight.js/lib/languages/php';
import * as powershell from 'highlight.js/lib/languages/powershell';
import * as processing from 'highlight.js/lib/languages/processing';
import * as prolog from 'highlight.js/lib/languages/prolog';
import * as protobuf from 'highlight.js/lib/languages/protobuf';
import * as python from 'highlight.js/lib/languages/python';
import * as q from 'highlight.js/lib/languages/q';
import * as qml from 'highlight.js/lib/languages/qml';
import * as r from 'highlight.js/lib/languages/r';
import * as ruby from 'highlight.js/lib/languages/ruby';
import * as rust from 'highlight.js/lib/languages/rust';
import * as scala from 'highlight.js/lib/languages/scala';
import * as scheme from 'highlight.js/lib/languages/scheme';
import * as scss from 'highlight.js/lib/languages/scss';
import * as shell from 'highlight.js/lib/languages/shell';
import * as smali from 'highlight.js/lib/languages/smali';
import * as smalltalk from 'highlight.js/lib/languages/smalltalk';
import * as sql from 'highlight.js/lib/languages/sql';
import * as swift from 'highlight.js/lib/languages/swift';
import * as tcl from 'highlight.js/lib/languages/tcl';
import * as tex from 'highlight.js/lib/languages/tex';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as vbnet from 'highlight.js/lib/languages/vbnet';
import * as vbscript from 'highlight.js/lib/languages/vbscript';
import * as verilog from 'highlight.js/lib/languages/verilog';
import * as vhdl from 'highlight.js/lib/languages/vhdl';
import * as vim from 'highlight.js/lib/languages/vim';
import * as x86asm from 'highlight.js/lib/languages/x86asm';
import * as xml from 'highlight.js/lib/languages/xml';
import * as xquery from 'highlight.js/lib/languages/xquery';
import * as yaml from 'highlight.js/lib/languages/yaml';
import * as low from 'lowlight/lib/core';

export const LANGUAGES = {
  'actionscript': actionscript,
  'apache': apache,
  'applescript': applescript,
  'armasm': armasm,
  'bash': bash,
  'basic': basic,
  'clojure': clojure,
  'cmake': cmake,
  'cpp': cpp,
  'cs': cs,
  'csp': csp,
  'css': css,
  'dart': dart,
  'diff': diff,
  'd': d,
  'dockerfile': dockerfile,
  'dos': dos,
  'dts': dts,
  'elixir': elixir,
  'elm': elm,
  'erb': erb,
  'erlang': erlang,
  'fortran': fortran,
  'fsharp': fsharp,
  'go': go,
  'gradle': gradle,
  'groovy': groovy,
  'haml': haml,
  'handlebars': handlebars,
  'haskell': haskell,
  'http': http,
  'ini': ini,
  'java': java,
  'javascript': javascript,
  'json': json,
  'kotlin': kotlin,
  'less': less,
  'lisp': lisp,
  'lua': lua,
  'makefile': makefile,
  'markdown': markdown,
  'nginx': nginx,
  'objectivec': objectivec,
  'ocaml': ocaml,
  'perl': perl,
  'php': php,
  'powershell': powershell,
  'processing': processing,
  'prolog': prolog,
  'protobuf': protobuf,
  'python': python,
  'q': q,
  'qml': qml,
  'r': r,
  'ruby': ruby,
  'rust': rust,
  'scala': scala,
  'scheme': scheme,
  'scss': scss,
  'shell': shell,
  'smali': smali,
  'smalltalk': smalltalk,
  'sql': sql,
  'swift': swift,
  'tcl': tcl,
  'tex': tex,
  'typescript': typescript,
  'vbnet': vbnet,
  'vbscript': vbscript,
  'verilog': verilog,
  'vhdl': vhdl,
  'vim': vim,
  'x86asm': x86asm,
  'xml': xml,
  'xquery': xquery,
  'yaml': yaml,
};

for (const key of Object.keys(LANGUAGES)) {
  const lang = LANGUAGES[key];
  low.registerLanguage(key, lang);
}

@Component({
  selector: 'cp-code-preview-body',
  templateUrl: './code-preview-body.component.html',
  styleUrls: ['./code-preview-body.component.scss']
})
export class CodePreviewBodyComponent implements OnInit, OnChanges {

  @Input() language = 'bash';
  @Input() codeText: string;

  highlightedCode: string;

  constructor(
    private elemRef: ElementRef,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.language || changes.codeText) {
      const elem = this.elemRef.nativeElement;
      // const res = low.highlight(this.language, this.codeText);
      // this.highlightedCode = rehype().stringify(res.value).toString();
      // console.log(res);
      // console.log(this.highlightedCode);
    }
  }

}
