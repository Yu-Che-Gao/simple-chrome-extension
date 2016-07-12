function getTitle(id, str) {
    return '<div id="' + id + '" class="rce-comment">' + str + '</div>';
}

Object.prototype.setWord = function () { //Object.setWord(colorStr, fontSize, fontFamily)
    for (let i = 0; i < arguments.length; i++) {       
        switch (i) {
            case 0: //第一個輸入參數
                if (arguments[i] != null) this.style.color = arguments[0];
                break;

            case 1: //第二個輸入參數
                if (arguments[i] != null) this.style.fontSize = arguments[1];
                break;

            case 2: //第三個輸入參數
                if (arguments[i] != null) this.style.fontFamily = arguments[2];
                break;
        }
    }
}