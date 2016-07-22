const { iframeResizer } = require('iframe-resizer');
const QANDO_FRONT_URL  = process.env.NODE_ENV === 'production'
  ? 'http://booking.qando.it'
  : 'http://localhost:3000';

/**
 * Make an DOM element integrate with Qando booking!
 *
 * el: DOM element where render iframe
 * options: {
 *  shop: Qando shop id
 *  servi: Qando service id
 * }
 */
function booking(selector, options = {}) {
  const el = document.querySelector(selector);
  const { shop, service } = options;
  const url = makeIframeUrl(shop, service, options);

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.border = '0px';
  iframe.style.width = '100%';
  iframe.frameborder = '0';
  iframe.scrolling = 'no';

  // Set iframe content
  el.appendChild(iframe);
  iframeResizer({
    checkOrigin: false,
    log: process.env.NODE_ENV !== 'production',
  });
};

function makeIframeUrl(shop, service, options) {
  let url = `${QANDO_FRONT_URL}/${shop}`;
  if (service) {
    url += `/booking/${service}`;
  }
  url += `?iframe=${shop}` +
    '&iframeWithHeader=' + ~~options.header +
    '&iframeWithFooter=' + ~~options.footer +
    '&iframeCustomCss='  + ~~options.css;
  return url;
}

// exports qando
const qando = {
  booking,
};

module.exports = qando;
