import { CodePreviewModule } from './code-preview.module';

describe('CodePreviewModule', () => {
  let codePreviewModule: CodePreviewModule;

  beforeEach(() => {
    codePreviewModule = new CodePreviewModule();
  });

  it('should create an instance', () => {
    expect(codePreviewModule).toBeTruthy();
  });
});
