function getTitle(id, str) {
    return '<div id="' + id + '" class="rce-comment">' + str + '</div>';
}

function getDisqus() {
    return '<div id="disqus_thread"></div>';
}

function getHistory() {
    return '<div id="history" style="width: 50%; margin: auto; text-align: left;"><h2 class="rce-history-header">房東的各種Po房歷史</h2></div>';
}

function setDisqus() {
    var disqus_shortname = 'renthouserobot';

    (function () {
        var d = document, s = d.createElement('script');
        s.asyc = true;
        s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();

    var disqusThread = document.getElementById('disqus_thread');
    disqusThread.style.width = '50%';
    disqusThread.style.margin = 'auto';
}

//Object.setWord(fontColor, fontSize, fontFamily);
Object.prototype.setWord = function () {
    let attributes = ['color', 'font-size', 'font-family'];
    let temp = '';
    for (let i = 0; i < attributes.length; i++) {
        if (arguments[i] != null) {
            this.style.cssText += attributes[i] + ':' + arguments[i] + ';';
        }
    }
}