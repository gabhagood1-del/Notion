/* Rendering and controls. Routine content edits belong in content.js. */
(() => {
  'use strict';
  const config = window.CAROUSEL_CONTENT;
  const $ = id => document.getElementById(id);
  const region = document.querySelector('.carousel');
  if (!config || !Array.isArray(config.items)) {
    $('empty').hidden = false;
    $('empty').textContent = 'Highlights could not load. Please check content.js.';
    return;
  }
  const items = config.items.filter(item => item && typeof item === 'object');
  let selected = null; // null means all categories, including a category literally named “All”.
  let visible = items;
  let index = 0;
  let cards = [];
  let dots = [];
  const str = value => typeof value === 'string' ? value : '';
  const category = item => str(item.type) || 'Highlight';
  function textElement(tag, className, value) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = str(value); // Plain text only: pasted markup never executes.
    return element;
  }
  // Block executable URLs. Relative image paths work in any repository subfolder.
  function safeUrl(value) {
    if (!str(value).trim()) return null;
    try {
      const url = new URL(value, document.baseURI);
      return ['https:', 'http:', 'file:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  }
  $('eyebrow').textContent = str(config.eyebrow);
  $('heading').textContent = str(config.title) || 'Community highlights';
  $('intro').textContent = str(config.intro);
  $('note').textContent = str(config.note);
  $('note').hidden = !config.note;
  document.title = `${$('heading').textContent} · ${str(config.eyebrow)}`;

  const categories = [null, ...new Set(items.map(category))];
  for (const name of categories) {
    const button = textElement('button', 'filter', name === null ? 'All' : name);
    button.type = 'button';
    button.setAttribute('aria-pressed', String(name === selected));
    button.addEventListener('click', () => {
      selected = name;
      visible = selected === null ? items : items.filter(item => category(item) === selected);
      index = 0;
      [...$('filters').children].forEach((filter, i) => filter.setAttribute('aria-pressed', String(categories[i] === selected)));
      build();
      announce();
    });
    $('filters').append(button);
  }
  $('filters').hidden = config.showFilters === false || items.length === 0;

  function build() {
    $('slides').replaceChildren();
    $('dots').replaceChildren();
    cards = []; dots = [];
    visible.forEach((item, i) => {
      const card = document.createElement('article');
      card.className = 'slide';
      card.id = `highlight-${i + 1}`;
      card.setAttribute('role', 'group');
      card.setAttribute('aria-roledescription', 'slide');
      card.setAttribute('aria-label', `${i + 1} of ${visible.length}: ${str(item.title) || 'Community highlight'}`);
      const visual = document.createElement('div');
      visual.className = `visual ${['forest','clay','lake','gold'].includes(item.theme) ? item.theme : 'forest'}`;
      const art = document.createElement('div');
      art.className = 'art'; art.setAttribute('aria-hidden', 'true');
      art.append(textElement('span', 'leaf', ''), textElement('span', 'art-label', 'Ideas take root.'));
      visual.append(art);
      const imageUrl = safeUrl(item.image);
      if (imageUrl) {
        const img = document.createElement('img');
        img.alt = str(item.imageAlt);
        img.style.objectPosition = str(item.imagePosition) || '50% 50%';
        // A missing photo falls back to the decorative artwork.
        img.addEventListener('error', () => img.remove(), { once:true });
        img.src = imageUrl;
        visual.append(img);
      }
      const copy = document.createElement('div'); copy.className = 'copy';
      copy.append(textElement('p', 'tag', str(item.label) || category(item)), textElement('h2', '', str(item.title) || 'Community highlight'));
      for (const [field, tag, className] of [['subtitle','p','subtitle'],['body','p','body'],['quote','blockquote',''],['detail','p','detail']]) {
        if (str(item[field])) copy.append(textElement(tag, className, item[field]));
      }
      const linkUrl = safeUrl(item.linkUrl);
      if (linkUrl && str(item.linkText)) {
        const link = textElement('a', 'story-link', `${item.linkText} ↗`);
        link.href = linkUrl; link.target = '_blank'; link.rel = 'noopener noreferrer';
        link.append(textElement('span', 'sr-only', ' (opens in a new tab)'));
        copy.append(link);
      }
      card.append(visual, copy); cards.push(card); $('slides').append(card);
      const dot = textElement('button', 'dot', ''); dot.type = 'button';
      dot.setAttribute('aria-label', `Show highlight ${i + 1}: ${str(item.title) || 'Community highlight'}`);
      dot.setAttribute('aria-controls', card.id);
      dot.addEventListener('click', () => show(i));
      dots.push(dot); $('dots').append(dot);
    });
    $('empty').hidden = visible.length !== 0;
    $('controls').hidden = visible.length === 0;
    $('previous').disabled = $('next').disabled = visible.length < 2;
    $('dots').hidden = visible.length < 2;
    show(0, false);
  }
  function announce() {
    $('status').textContent = visible.length ? `${index + 1} of ${visible.length}. ${category(visible[index])}: ${str(visible[index].title)}` : 'No highlights yet.';
  }
  function show(nextIndex, speak = true) {
    if (!visible.length) return;
    // If a focused slide link will be hidden, move focus to the carousel first.
    if (cards[index]?.contains(document.activeElement)) region.focus({preventScroll:true});
    index = (nextIndex + visible.length) % visible.length;
    cards.forEach((card, i) => { card.hidden = i !== index; });
    dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === index)));
    $('counter').textContent = `${String(index + 1).padStart(2, '0')} / ${String(visible.length).padStart(2, '0')}`;
    if (speak) announce();
  }
  $('previous').addEventListener('click', () => show(index - 1));
  $('next').addEventListener('click', () => show(index + 1));
  region.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.target.closest('input,textarea,select,[contenteditable="true"]')) return;
    const destinations = { ArrowLeft:index - 1, ArrowRight:index + 1, Home:0, End:visible.length - 1 };
    if (Object.hasOwn(destinations, event.key) && visible.length) {
      event.preventDefault(); show(destinations[event.key]);
    }
  });
  // Touch/pen only. Vertical gestures and multi-touch are never treated as swipes.
  let start = null;
  $('slides').addEventListener('pointerdown', event => {
    if (!event.isPrimary) { start = null; return; }
    if (event.pointerType === 'mouse' || event.target.closest('a,button')) return;
    start = { x:event.clientX, y:event.clientY, id:event.pointerId };
  });
  window.addEventListener('pointerup', event => {
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x, dy = event.clientY - start.y;
    start = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(index + (dx < 0 ? 1 : -1));
  });
  window.addEventListener('pointercancel', () => { start = null; });
  build();
})();
