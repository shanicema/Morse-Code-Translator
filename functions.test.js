import {convertToMorse, convertToEnglish} from './functions.js';

// TEST SCENARIOS

describe('convertToMorse', () => {
let input = "hello";

    it('should not convert unknown characters', () => {
        expect(convertToMorse("#")).toBe("#");
    });
    it('should add a space between each morse code character', () => {
        expect(convertToMorse("hello")).toBe(".... . .-.. .-.. ---");
    });
    it('should add three spaces between each morse code word', () => {
        expect(convertToMorse("hello world")).toBe(".... . .-.. .-.. ---   .-- --- .-. .-.. -..");
    });
});



describe('convertToEnglish', () => {

    it('should not convert unknown characters', () => {
        expect(convertToEnglish("!")).toBe("!");
    });
    it('should add a space between each english word', () => {
        expect(convertToEnglish(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")).toBe("hello world");
    });
    it('should return output to lowercase', () => {
        const orange = convertToMorse('ORANGE');
        expect(convertToEnglish(orange)).toBe("orange");
    });
    it('should remove spaces between each character', () => {
        expect(convertToEnglish(".... . .-.. .-.. ---")).toBe("hello");
    });
});
