import { testScrap } from '../scrappers/index';

describe('Return variable tests', () => {
    test(`Mehtod should return tags`, () => {

        return testScrap().then(data => {
            expect(data.tags.length).not.toBe(0);
        })
    })

    test(`Mehtod should return title`, () => {

        return testScrap().then(data => {
            expect(data.title).not.toBeNull();
        })
    })

    test(`Mehtod should return imgSelector`, () => {

        return testScrap().then(data => {
            expect(data.imgSelector).not.toBeNull();
        })
    })

    test(`Mehtod should return articleContnet`, () => {

        return testScrap().then(data => {
            expect(data.articleContnet.length).not.toBe(0);
        })
    })
});