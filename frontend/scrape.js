// scrape.mjs (ES module)
// --------------------------------------------
// 1) Be sure to install Puppeteer:
//      npm install puppeteer
//
// 2) Run the script with:
//      node scrape.mjs
// --------------------------------------------

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

// This helps us get __dirname in an ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URL of the dynamic "view-all" discounts page
const TARGET_URL = "https://www.publix.com/savings/weekly-ad/view-all";

// We'll store the final HTML in "publix-view-all.html"
const OUTPUT_FOLDER = path.join(__dirname, "public");
const OUTPUT_FILE = "publix-view-all.html";

async function scrapePublixHtml() {
  try {
    console.log(`Launching headless browser. Navigating to: ${TARGET_URL}`);

    // 1) Launch Puppeteer (Chrome) in headless mode.
    //    - If you want to see the browser, set headless to false.
    const browser = await puppeteer.launch({
      headless: "new", // "new" = headless in newer Puppeteer versions
    });

    // 2) Create a new page and increase default navigation timeout to 60s
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000); // 60 seconds

    // 3) Go to the weekly-ad page; wait until the network is idle (no new requests).
    await page.goto(TARGET_URL, {
      waitUntil: "networkidle0",
      timeout: 60000, // 60 seconds
    });

    // OPTIONAL: Wait for a specific element that indicates the deals have loaded.
    // Example: a certain class or ID you see in DevTools
    // await page.waitForSelector(".weekly-ad-item", { timeout: 60000 });

    console.log("Page loaded; capturing rendered HTML...");

    // 4) Get the fully rendered HTML
    const html = await page.content();

    // 5) Close the browser
    await browser.close();

    // 6) Ensure output folder exists
    if (!fs.existsSync(OUTPUT_FOLDER)) {
      fs.mkdirSync(OUTPUT_FOLDER, { recursive: true });
      console.log(`Created folder: ${OUTPUT_FOLDER}`);
    }

    // 7) Write the final HTML to "publix-view-all.html"
    const filePath = path.join(OUTPUT_FOLDER, OUTPUT_FILE);
    fs.writeFileSync(filePath, html, "utf8");
    console.log(`Saved full dynamic HTML to: ${filePath}`);
  } catch (err) {
    console.error("Error scraping HTML:", err.message);
  }
}

// 8) Run the scraper
scrapePublixHtml();
