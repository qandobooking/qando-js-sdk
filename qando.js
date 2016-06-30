var Qando = (function () {
  var sdk = {};

  var QANDO_FRONT_URL = 'http://booking.qando.it';

  function makeIframeUrl(shop, service, options) {
    var url = QANDO_FRONT_URL + '/shops/' + shop;
    if (service) {
      url += '/booking/' + service;
    }
    url += '?iframe=1' +
      '&iframeWithHeader=' + ~~options.header +
      '&iframeWithFooter=' + ~~options.footer;
    return url;
  }

  /**
   * Make an DOM element integrate with Qando booking!
   *
   * el: DOM element where render iframe
   * options: {
   *  shop: Qando shop id
   *  servi: Qando service id
   * }
   */
  sdk.booking = function(el, options) {
    var o = options || {};

    var src = 'http://localhost:3000';
    var iframe = document.createElement('iframe');
    iframe.src = makeIframeUrl(o.shop, o.service, o);
    iframe.style.border = '0px';
    iframe.style.width = '100%';
    iframe.frameborder = '0';
    iframe.scrolling = 'no';

    // Set iframe content
    el.appendChild(iframe);
    iFrameResize({checkOrigin:false, log:true});
  };

  return sdk;
}());

// export
window.Qando = Qando
