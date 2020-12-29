import TemplateProcessor from '../templateProcessor.js';

describe('smm', () => {
    beforeAll(() => {
        document.body.innerHTML = '<div id="main"></div>';
    });
  
    it('Rendering', () => {
        const view = '<h>smth</h>';
        const expected = '<div id="main"><h>smth</h></div>';
        const processor = new TemplateProcessor();
        processor.render(view);
        expect(document.body.innerHTML).toEqual(expected);
    });
});

