let fs = require('fs');
let files = fs.readdirSync('./scrappers');

files.forEach(file => {
    let fileName = file.split('.');
    const testScrap = require(`./scrappers/${fileName[0]}`)

    describe('Return variable tests', () => {
        test(`Mehtod should return tags on ${file}`, () => {

            return testScrap.then(data => {
                expect(data.tags.length).not.toBe(0);
            })
        })

        test(`Mehtod should return title on ${file}`, () => {

            return testScrap.then(data => {
                expect(data.title).not.toBeNull();
            })
        })

        test(`Mehtod should return imgSelector on ${file}`, () => {

            return testScrap.then(data => {
                expect(data.imgSelector).not.toBeNull();
            })
        })

        test(`Mehtod should return articleContnet on ${file}`, () => {

            return testScrap.then(data => {
                expect(data.articleContnet.length).not.toBe(0);
            })
        })
    });
})