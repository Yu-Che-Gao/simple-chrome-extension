function getTitle(id, str) {
    return '<div id="' + id + '" class="rce-comment">' + str + '</div>';
}

function getDisqus() {
    return '<div id="disqus_thread"></div>';
}

Object.prototype.setWord = function () { //Object.setWord(colorStr, fontSize, fontFamily)
    let attributes = ['color', 'font-size', 'font-family'];
    let temp = '';
    for (let i = 0; i < attributes.length; i++) {
        if (arguments[i] != null) {
            this.style.cssText += attributes[i] + ':' + arguments[i] + ';';
        }
    }
}