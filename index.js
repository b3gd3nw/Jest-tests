function getTheBoot(context) {
    console.log(context);
    const article = context.querySelector('article');

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

    // const CDP = require('chrome-remote-interface');

    // CDP((client) => {
    //   // Extract used DevTools domains.
    //   const {Page, Runtime} = client;
    
    //   // Enable events on domains we are interested in.
    //   Promise.all([
    //     Page.enable()
    //   ]).then(() => {
    //     return Page.navigate({url: 'https://www.blabbermouth.net/news/dave-grohl-tom-morello-and-rudy-sarzo-comment-on-randy-rhoadss-rock-hall-induction/'});
    //   });
    
    //   // Evaluate outerHTML after page has loaded.
    //   Page.loadEventFired(() => {
    //     Runtime.evaluate({expression: 'document.body.outerHTML'}).then((result) => {
    //       console.log(result.result.value.querySelector('.gsfi'));
    //       client.close();
    //     });
    //   });
    // }).on('error', (err) => {
    //   console.error('Cannot connect to browser:', err);
    // });


    // const { Chromeless } = require('chromeless')

    // async function run() {
    //     const chromeless = new Chromeless()

    //     const html = await chromeless
    //         .goto('https://www.blabbermouth.net/news/dave-grohl-tom-morello-and-rudy-sarzo-comment-on-randy-rhoadss-rock-hall-induction/')
    //         .wait()
    //         .evaluate(() => {
    //             return document
    //         })

    //     // let dom = new DOMParser().parseFromString(html, 'text/xml');
    //     // console.log(getTheBoot(html)) // prints local file path or S3 url
    //     console.log(html);
    //     await chromeless.end()
    // }

    // run().catch(console.error.bind(console))


    const puppeteer = require('puppeteer');

    (async() => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.blabbermouth.net/news/dave-grohl-tom-morello-and-rudy-sarzo-comment-on-randy-rhoadss-rock-hall-induction/', {waitUntil: 'domcontentloaded'});
        // const html = await page.content();
        // const nodes = await page.$('body');
        const res = await page.content();
        console.log(`DOM: ${res}`);
        getTheBoot(res);
        await browser.close();
    })();

}

testScrap();
module.exports = { getTheBoot, testScrap }