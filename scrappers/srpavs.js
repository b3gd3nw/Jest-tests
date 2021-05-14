function getTheBoot(context) {
    const article = context.querySelector('article');

    if (!article) {
        return { artists: [''] };
    }

    const tags = article.querySelectorAll('.article-footer .tags a');
    const title = article.querySelector('.article-header h1');
    const imgSelector = article.querySelector('section .post-thumb img');
    const imgSource = imgSelector ? imgSelector.getAttribute('src') : '';
    const articleContnet = article.querySelectorAll('.entry-content p');

    return { tags, title, imgSelector, articleContnet };
}

async function testScrap() {
    const puppeteer = require('puppeteer');
    const jsdom = require('jsdom');

    const { JSDOM } = jsdom;

    const res = await (async() => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.blabbermouth.net/news/dave-grohl-tom-morello-and-rudy-sarzo-comment-on-randy-rhoadss-rock-hall-induction/', { waitUntil: 'domcontentloaded' });
        const html = await page.content();
        const dom = new JSDOM(html);
        const document = dom.window.document;
        await browser.close();

        return document
    })();

    return getTheBoot(res);
}

module.exports = testScrap();