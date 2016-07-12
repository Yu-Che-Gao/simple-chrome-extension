var body = document.getElementsByTagName('body')[0];
body.innerHTML += getTitle('rce-title', '評論');

var title = document.getElementById('rce-title');
title.setWord('blue', '28px', '微軟正黑體');

body.innerHTML += getDisqus();
var href = getHref();
var identifier=getIdetifier();
setDisqus();
