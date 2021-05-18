function getTheBoot(context, test = false) {
    const article = context.querySelector('article');

    if (!article) {
        return { artists: [''] };
    }

    const tags = article.querySelectorAll('.article-footer .tags a');
    const title = article.querySelector('.article-header h1');
    const imgSelector = article.querySelector('section .post-thumb img');
    const imgSource = imgSelector ? imgSelector.getAttribute('src') : '';
    const articleContnet = article.querySelectorAll('.entry-content p');

    return test ? { tags, title, imgSelector, articleContnet } : scoreTags(context, tags, title, imgSource, articleContnet);
}

/**
 * This function return scrap function with parameters
 * 
 * @returns scrap function with context and testing flag in parameters
 */
async function testScrap() {
    const puppeteer = require('puppeteer');
    const jsdom = require('jsdom');
    const { JSDOM } = jsdom;

    // This function open headless browser and return document context
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

    return getTheBoot(res, true);
}

export { getTheBoot, testScrap }