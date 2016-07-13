function getTitle(id, str) {
    return '<div id="' + id + '" class="rce-comment">' + str + '</div>';
}

function getDisqus() {
    return '<div id="disqus_thread"></div>';
}

function setDisqus() {
    var disqus_url = location.href;
    var disqus_identifier = getIdentifier();
    var disqus_config = function () {
        this.page.url = disqus_url;
        this.page.identifier = disqus_identifier;
    };

    (function () {
        var d = document, s = d.createElement('script');
        s.asyc = true;
        s.src = '//renthouserobot.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    var disqusThread = document.getElementById('disqus_thread');
    disqusThread.style.width = '50%';
    disqusThread.style.margin = 'auto';
}

Object.prototype.setWord = function () {
    let attributes = ['color', 'font-size', 'font-family'];
    let temp = '';
    for (let i = 0; i < attributes.length; i++) {
        if (arguments[i] != null) {
            this.style.cssText += attributes[i] + ':' + arguments[i] + ';';
        }
    }
}