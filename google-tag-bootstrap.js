(function() {
  // Shared dataLayer for gtag.js and GTM
  window.dataLayer = window.dataLayer || [];

  function gtag(){
    window.dataLayer.push(arguments);
  }

  // Expose gtag globally for compatibility
  window.gtag = window.gtag || gtag;

  // Initialize gtag
  gtag('js', new Date());
  gtag('config', 'G-ZKMBJ3ZPGE');

  // Load gtag.js
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZKMBJ3ZPGE';
  document.head.appendChild(gtagScript);

  // Load GTM
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-P56Q566B');
})();
