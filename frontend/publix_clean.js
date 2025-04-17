import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cheerio = require('cheerio');
import fs from 'fs';

// Load saved HTML
const html = fs.readFileSync('publix-weekly-ad-full.html', 'utf-8');
const $ = cheerio.load(html);

// Each item card
const cards = $('div[data-qa-automation="listed-savings-card"]');
console.log(`🔍 Found ${cards.length} discount cards.`);

const items = [];

cards.each((i, el) => {
  const card = $(el);

  const itemName = card.find('[data-qa-automation="prod-title"]').text().trim();
  const discount = card.find('.p-savings-badge').first().text().trim();
  const saveInfo = card.find('.additional-info').text().trim();

  // ✅ Extract <img src> and <img alt>
  const imgTag = card.find('img');
  const imageUrl = imgTag.attr('src') || '';
  const imageAlt = imgTag.attr('alt') || '';

  console.log(`📦 Card ${i + 1}:`);
  console.log(`  🛒 Item: ${itemName}`);
  console.log(`  💸 Discount: ${discount}`);
  console.log(`  💰 Save Info: ${saveInfo}`);
  console.log(`  🖼️ Image: ${imageUrl}`);
  console.log(`  🏷️ Image Alt: ${imageAlt}`);

  if (itemName || imageUrl) {
    items.push({
      item: itemName || imageAlt,
      discount,
      save_info: saveInfo,
      image_url: imageUrl,
      store: "Publix" // ✅ Added store field
    });
  }
});

if (items.length === 0) {
  console.log('⚠️ No items extracted. Check selectors or structure.');
} else {
  fs.writeFileSync('./src/data/publix-discounts.json', JSON.stringify(items, null, 2));
  console.log(`✅ Saved ${items.length} items to publix-discounts.json`);
}
