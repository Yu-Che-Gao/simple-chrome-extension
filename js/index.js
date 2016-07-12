var body = document.getElementsByTagName('body')[0];
body.innerHTML += getTitle('rce-title', '評論');

var title = document.getElementById('rce-title');
title.setWord('blue', '28px', '微軟正黑體');

body.innerHTML += getDisqus();

let identifier = getIdentifier();
console.log(location.hostname);
console.log(identifier);
var disqus_url = location.hostname;
var disqus_identifier = identifier;
var disqus_config = function () {
    this.page.url = location.hostname;
    this.page.identifier = identifier;
};
console.log(disqus_config);

(function () {
    var d = document, s = d.createElement('script');
    s.src = '//rcerenthouse.disqus.com/embed.js';
    s.async = true;
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

let disqusThread = document.getElementById('disqus_thread');
disqusThread.style.width = '50%';
disqusThread.style.margin = 'auto';