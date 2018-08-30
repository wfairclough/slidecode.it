import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePreviewBodyComponent } from './code-preview-body.component';

describe('CodePreviewBodyComponent', () => {
  let component: CodePreviewBodyComponent;
  let fixture: ComponentFixture<CodePreviewBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CodePreviewBodyComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePreviewBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
