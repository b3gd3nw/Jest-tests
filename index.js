function getTheBoot(context) {
    const article = context.$refs.container.closest('article');

    if (!article) {
        return { artists: [''] };
    }

    const tags = article.querySelectorAll('.article-footer .tags a');
    const title = article.querySelector('.article-header h1');
    const imgSelector = article.querySelector('section .post-thumb img');
    const imgSource = imgSelector ? imgSelector.getAttribute('src') : '';
    const articleContnet = article.querySelectorAll('.entry-content p');

    return { tags, title, imgSource, articleContnet };
}

function testScrap() {

    // const chromeLauncher = require('chrome-launcher');
    // const CDP = require('chrome-remote-interface');
    // (async function() {
    //         async function launchChrome() { return await chromeLauncher.launch({ chromeFlags: ['--disable-gpu', '--headless'] }); }
    //         const chrome = await launchChrome();
    //         const protocol = await CDP({ port: chrome.port }); // ALL FOLLOWING CODE SNIPPETS HERE })(); 

    const { Chromeless } = require('chromeless')

    async function run() {
        const chromeless = new Chromeless()

        const html = await chromeless
            .goto('https://www.blabbermouth.net/news/dave-grohl-tom-morello-and-rudy-sarzo-comment-on-randy-rhoadss-rock-hall-induction/')
            .wait(1000)
            .evaluate(() => {
                return document
            })

        // let dom = new DOMParser().parseFromString(html, 'text/xml');
        // console.log(getTheBoot(html)) // prints local file path or S3 url
        console.log(html);
        await chromeless.end()
    }

    run().catch(console.error.bind(console))


    // const puppeteer = require('puppeteer');

    // (async() => {
    //     const browser = await puppeteer.launch();
    //     const page = await browser.newPage();
    //     await page.goto('https://www.blabbermouth.net/news/dave-grohl-tom-morello-and-rudy-sarzo-comment-on-randy-rhoadss-rock-hall-induction/');
    //     const doc = await page.content();
    //     console.log(doc);
    //     await browser.close();
    // })();

}

testScrap();
module.exports = { getTheBoot, testScrap }