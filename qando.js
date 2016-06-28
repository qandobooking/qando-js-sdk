var Qando = (function () {
  var sdk = {};

  var QANDO_FRONT_URL = 'http://localhost:3000';

  function makeIframeUrl(shop, service, options) {
    var url = QANDO_FRONT_URL + '/shops/' + shop;
    if (service) {
      url += '/booking/' + service;
    }
    url += '?iframe=1';
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

    var src = ''
    var iframe = document.createElement('iframe');
    iframe.src = makeIframeUrl(o.shop, o.service);
    iframe.style.width = '100%';

    //iframe.style.height = '1200px';

    iframe.style.border = '0px';
    iframe.frameborder = '0';
    iframe.scrolling = 'no';
    iframe.onload = function() {
      //console.log(iframe.contentWindow);
      var x = iframe.contentWindow.document.body.scrollHeight;
      //console.log('Loaded!');
      //iframe.style.height = '1000px';  iframe.contentWindow.document.body.scrollHeight + 'px';
    };
    iFrameResize({log:true});

    // Set iframe content
    el.appendChild(iframe);
  };

  return sdk;
}());

// export
window.Qando = Qando
