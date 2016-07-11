function getTitle(id, str) {
    return '<div id="' + id + '" class="rce-comment">' + str + '</div>';
}

Object.prototype.setColor = function (colorStr) { //設定文字的顏色
    this.style.color = colorStr;
}

Object.prototype.setSize = function (fontSize) {
    this.style.fontSize = fontSize;
}

Object.prototype.setFamily = function (fontFamily) {
    this.style.fontFamily = fontFamily;
}