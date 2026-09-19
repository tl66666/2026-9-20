const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

test('page contains the full birthday message and both portraits', () => {
  const html = read('index.html');

  assert.match(html, /肉丝，生日快乐！/);
  assert.match(html, /她是我这辈子最好的朋友，我爱她。/);
  assert.match(html, /苦难日子里我们互相托底/);
  assert.match(html, /生日快乐bb!/);
  assert.match(html, /CC\.jpg/);
  assert.match(html, /肉丝\.jpg/);
});

test('page exposes accessible letter and candle interactions', () => {
  const html = read('index.html');

  assert.match(html, /href="#letter"/);
  assert.match(html, /id="blow-candle"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /一起吹蜡烛/);
});

test('styles animate both portraits and respect reduced motion', () => {
  const css = read('styles.css');

  assert.match(css, /@keyframes float-left/);
  assert.match(css, /@keyframes float-right/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /@media \(max-width: 700px\)/);
});

test('script implements candle state and confetti', () => {
  const script = read('script.js');

  assert.match(script, /launchConfetti/);
  assert.match(script, /is-blown/);
  assert.match(script, /IntersectionObserver/);
});
