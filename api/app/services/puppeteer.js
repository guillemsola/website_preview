const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

const options = {
    ignoreHTTPSErrors: true,
    dumpio: true,
    headless: true,
    args: ['--no-sandbox']
};
// , '--disable-setuid-sandbox'
screenshot = async function(url, device) {
    // (async () => {
        var t = process.hrtime();
        const browser = await puppeteer.launch(options);
        const page = await browser.newPage();
        process.on("unhandledRejection", (reason, p) => {
            console.error("Unhandled Rejection at: Promise", p, "reason:", reason);
            browser.close();
        });
    
        // https://www.w3schools.com/browsers/browsers_display.asp
        // page.setViewport({ width: 1366, height: 768 })
        await page.emulate(devices[device])
    
        await page.goto(url, {waitUntil: 'networkidle2'});
        // await page.goto(url, {timeout : 60000});
        
        // Some pages have JS that is activated while navigating, force it
        // await autoScroll(page);
        
        // var image = await page.screenshot({fullPage: true });
        var image = await page.screenshot();
    
        await browser.close();
    
        t = process.hrtime(t);
        console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);

        return image;
    // })();
}

function autoScroll(page) {
    return page.evaluate(() => {
        return new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        })
    });
}

module.exports = screenshot;