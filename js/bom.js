function getHref() {
    return location.href;
}

function getGET() {
    let rawString = location.search;
    let getPara, ParaVal;
    let aryPara = [];

    if (strUrl.indexOf("?") != -1) {
        let getSearch = strUrl.split("?");
        getPara = getSearch[1].split("&");
        for (i = 0; i < getPara.length; i++) {
            ParaVal = getPara[i].split("=");
            aryPara.push(ParaVal[0]);
            aryPara[ParaVal[0]] = ParaVal[1];
        }
    }

    return aryPara;
}

function getHostName() {
    return location.hostname;
}

function getHrefWithoutGET() {
    return location.href.replace(location.search, '');
}

String.prototype.filterString = function () {
    let temp = this;
    for (let i = 0; i < arguments.length; i++) {
        temp = temp.replace(arguments[i], '');
    }
    return temp;
}