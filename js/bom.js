String.prototype.filterString = function () {
    let temp = this;
    for (let i = 0; i < arguments.length; i++) {
        temp = temp.replace(arguments[i], '');
    }
    return temp;
}

function sendXHRToMiddle() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = this.responseText;
            console.log(response);
            let responseParse = JSON.parse(response);
            for (let i = 0; i < responseParse.response.length; i++) {
                let responseJSON = responseParse.response[i];
                let history = document.getElementById('history');

                history.innerHTML += '<div style="width: 50%;float:left;text-align: left;">' + historyLink(responseJSON.link, responseJSON.title) + '<br/>' + historyCounts(responseJSON.posts) + '</div>';
            }
        }
    };
    xhttp.open('POST', 'https://middleware-of-renthouse.azurewebsites.net/insert-url-and-phone', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    console.log('url=' + location.href + '&phone=' + getPhoneNumberOfPage() + '&url_id=' + getIdOfPage());
    xhttp.send('url=' + location.href + '&phone=' + getPhoneNumberOfPage() + '&url_id=' + getIdOfPage());
}

function sendXhrRequest(url, data, method, callback) {
    if (url != null && data != null && method != null && callback != null) { //輸入變數不能有null
        if (method == 'POST' || method == 'GET') { //method只能是POST或GET
            let xhttp = new XMLHttpRequest(); //開始進行XHR
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    callback(this.responseText);
                }
            };

            xhttp.open(method, url, true);
            if (method == 'POST') { //如果方法使用POST
                xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            xhttp.send(data); //資料送出
        } else {
            console.log('you have to use POST or GET to be method of xhr.');
        }
    } else {
        console.log('cannot have null arguments.');
    }

}

function historyLink(href, str) {
    return '<a class="rce-history-post" href="' + href + '">' + str + '</a>';
}

function historyCounts(str) {
    return '<div class="rce-comment-counts">- ' + str + ' Comments</div>';
}