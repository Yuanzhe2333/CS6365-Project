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

  console.log('✅ Location access granted. Waiting for initial content...');

  // ⏳ Initial wait for geolocation modal / store selection UI to settle
  await new Promise(resolve => setTimeout(resolve, 8000));

  const loadMoreSelector = '[data-qa-automation="button-Load more"]';
  const itemSelector = '.discount-card, .item-card, .card'; // Update with correct item class if needed

  while (true) {
    const loadMoreBtn = await page.$(loadMoreSelector);
    if (!loadMoreBtn) {
      console.log('✅ No more "Load more" button. All items loaded.');
      break;
    }

    const itemsBefore = await page.$$eval(itemSelector, items => items.length);

    console.log('🔄 Clicking "Load more"...');
    await loadMoreBtn.click();

    try {
      await page.waitForFunction(
        (selector, prevCount) =>
          document.querySelectorAll(selector).length > prevCount,
        { timeout: 20000 },
        itemSelector,
        itemsBefore
      );
      console.log('✅ More items loaded.');
    } catch {
      console.log('⚠️ Timeout or no new items appeared.');
      break;
    }
  }

  const htmlContent = await page.content();
  await writeFile('publix-weekly-ad-full.html', htmlContent);
  console.log('✅ Full HTML saved to publix-weekly-ad-full.html');

  await browser.close();
})();
