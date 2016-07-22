# Qando JS SDK

Basic example:
```html
<html>
  <head>
    <title>Qando</title>
  </head>
  <body>
    <h1>Qando</h1>
    <div id="qando-root"></div>
    <script type="text/javascript" src="https://cdn.rawgit.com/qandobooking/qando-js-sdk/master/lib/qando.js"></script>
    <script type="text/javascript">(function() {
      qando.booking('#qando-root', {
        shop: 'shop-name',
        service: 999,
        css: true,
        header: true,
        footer: true,
      });
    })();
    </script>
  </body>
</html>
```
