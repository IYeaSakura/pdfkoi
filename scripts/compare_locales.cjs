const fs = require('fs');

function getKeys(obj, prefix = '') {
    let keys = [];
    if (!obj) return keys;
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            keys = keys.concat(getKeys(obj[key], prefix + key + '.'));
        } else {
            keys.push(prefix + key);
        }
    }
    return keys;
}

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const enKeys = getKeys(en.faqPage);

const locales = ['zh', 'ar', 'de', 'es', 'fr', 'ja', 'ko', 'pt'];

locales.forEach(loc => {
    const content = JSON.parse(fs.readFileSync(`messages/${loc}.json`, 'utf8'));
    const locKeys = getKeys(content.faqPage);

    const missing = enKeys.filter(k => !locKeys.includes(k));
    const extra = locKeys.filter(k => !enKeys.includes(k));

    console.log(`--- ${loc} ---`);
    if (missing.length > 0) console.log(`Missing keys in ${loc}.json faqPage:`, missing);
    if (extra.length > 0) console.log(`Extra keys in ${loc}.json faqPage:`, extra);

    // Also check if values are identical to English (potentially untranslated)
    let untranslated = [];
    enKeys.forEach(k => {
        const enVal = k.split('.').reduce((o, i) => o[i], en.faqPage);
        const locVal = locKeys.includes(k) ? k.split('.').reduce((o, i) => o[i], content.faqPage) : null;
        if (locVal === enVal && k !== 'brand') { // skip brand as it's often the same
            untranslated.push(k);
        }
    });
    if (untranslated.length > 0) console.log(`Untranslated keys in ${loc}.json faqPage (same value as EN):`, untranslated.length);
});