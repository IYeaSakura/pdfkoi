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
const zh = JSON.parse(fs.readFileSync('messages/zh.json', 'utf8'));

const enKeys = getKeys(en.faqPage);
const zhKeys = getKeys(zh.faqPage);

const missing = enKeys.filter(k => !zhKeys.includes(k));
const extra = zhKeys.filter(k => !enKeys.includes(k));

console.log('Missing keys in zh.json faqPage:');
console.log(missing);
console.log('Extra keys in zh.json faqPage:');
console.log(extra);