const puppeteer = require('puppeteer');
const projects = [
    { title: 'Nuvva Art', link: 'https://igor-kan.github.io/artverse', imagePath: './public/screenshots/artverse.png' },
    { title: 'BibleReader', link: 'https://igor-kan.github.io/biblereader', imagePath: './public/screenshots/biblereader.png' },
    { title: 'AutoOps', link: 'https://igor-kan.github.io/autoops', imagePath: './public/screenshots/autoops.png' },
    { title: 'AutoWork', link: 'https://igor-kan.github.io/autowork', imagePath: './public/screenshots/autowork.png' },
    { title: 'AntiHate', link: 'https://igor-kan.github.io/antihate', imagePath: './public/screenshots/antihate.png' },
    { title: 'AlgoFund', link: 'https://igor-kan.github.io/algofund', imagePath: './public/screenshots/algofund.png' },
    { title: 'AIStylist', link: 'https://igor-kan.github.io/aistylist', imagePath: './public/screenshots/aistylist.png' },
    { title: 'LedgerAI', link: 'https://igor-kan.github.io/ledgerai', imagePath: './public/screenshots/ledgerai.png' },
    { title: 'AetherHealth', link: 'https://igor-kan.github.io/aetherhealth', imagePath: './public/screenshots/aetherhealth.png' },
];

async function takeScreenshot(project) {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    try {
        await page.goto(project.link, { waitUntil: 'networkidle2', timeout: 60000 });
        await page.screenshot({ path: project.imagePath });
        console.log(`Screenshot for ${project.title} taken at ${project.imagePath}`);
    } catch (error) {
        console.error(`Error taking screenshot for ${project.title}: ${error.message}`);
    } finally {
        await browser.close();
    }
}

async function generateAllScreenshots() {
    for (const project of projects) {
        await takeScreenshot(project);
    }
    console.log("All screenshots generated.");
}

generateAllScreenshots(); 