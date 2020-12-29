import Valid from '../valid.js';

describe('validator', () => {
    it('emailCheck', () => {
        const vaidator = new Valid();
        const testEmail = 'hhhgdfgh';
        const expected = false;
        vaidator.emailCheck(testEmail);
        expect(vaidator.emailCheck(testEmail)).toBe(expected);
    });

    it('validphone', () => {
        const vaidator = new Valid();
        const num = '00000000';
        const expected = false;
        vaidator.validphone(num);
        expect(vaidator.validphone(num)).toBe(expected);
    });

});
