import puppeteer from 'puppeteer';
import { writeFile } from 'fs/promises';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--use-fake-ui-for-media-stream', '--disable-features=IsolateOrigins,site-per-process'],
  });

  const context = browser.defaultBrowserContext();
  await context.overridePermissions('https://www.publix.com', ['geolocation']);

  const page = await browser.newPage();

  await page.setGeolocation({ latitude: 33.7836, longitude: -84.3835 });
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
  );

  await page.goto('https://www.publix.com/savings/weekly-ad/view-all', {
    waitUntil: 'domcontentloaded',
  });

  await new Promise(resolve => setTimeout(resolve, 8000));

  console.log('✅ Location access granted. Ready to select store.');

  // 🔥 Grab the HTML
  const htmlContent = await page.content();

  // 💾 Save to file
  await writeFile('publix-weekly-ad.html', htmlContent);
  console.log('✅ HTML content saved as publix-weekly-ad.html');

  await browser.close();
})();
