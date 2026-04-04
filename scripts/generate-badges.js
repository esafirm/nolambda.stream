import puppeteer from 'puppeteer';
import path from 'path';
import globby from 'globby';
import fs from 'fs';

async function generateBadges() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const badges = await globby('reviews/**/badge.html');

  for (const badgePath of badges) {
    const fullPath = path.resolve(badgePath);
    const outputDir = path.dirname(fullPath);
    const outputPath = path.join(outputDir, 'badge.png');

    console.log(`Generating badge for ${badgePath}...`);

    const page = await browser.newPage();
    await page.goto(`file://${fullPath}`, { waitUntil: 'networkidle0' });

    const element = await page.$('.badge');
    if (element) {
      await element.screenshot({ path: outputPath });
      console.log(`Saved to ${outputPath}`);
    } else {
      console.warn(`Could not find .badge element in ${badgePath}`);
    }

    await page.close();
  }

  await browser.close();
}

generateBadges().catch(err => {
  console.error(err);
  process.exit(1);
});
