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

                history.innerHTML += '<div style="width: 50%;float:left;">' + historyLink(responseJSON.link, responseJSON.title) + '<br/>' + historyCounts(responseJSON.posts) + '</div>';
                if (i % 3 == 0 && i != 0) {
                    history.innerHTML += '<br/><br/>';
                }
            }
        }
    };
    xhttp.open('POST', 'https://middleware-of-renthouse.azurewebsites.net/insert-url-and-phone', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    console.log('url=' + location.href + '&phone=' + getPhoneNumberOfPage() + '&url_id=' + getIdOfPage());
    xhttp.send('url=' + location.href + '&phone=' + getPhoneNumberOfPage() + '&url_id=' + getIdOfPage());
}

function historyLink(href, str) {
    return '<a class="rce-history-post" href="' + href + '">' + str + '</a>';
}

function historyCounts(str) {
    return '<div class="rce-comment-counts">- ' + str + ' Comments</div>';
}