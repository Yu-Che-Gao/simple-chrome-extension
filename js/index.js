var body = document.getElementsByTagName('body')[0];
body.innerHTML += getTitle('rce-title', '評論');

var title = document.getElementById('rce-title');
title.setWord('blue', '28px', '微軟正黑體');

body.innerHTML += getDisqus();
body.innerHTML += getHistory();
setDisqus();
// sendXHRToMiddle();

sendXhrRequest('https://middleware-of-renthouse.azurewebsites.net/insert-url-and-phone', 'url=' + location.href + '&phone=' + getPhoneNumberOfPage() + '&url_id=' + getIdOfPage(), 'POST', function (response) {
    let responseParse = JSON.parse(response);
    for (let i = 0; i < responseParse.response.length; i++) {
        let responseJSON = responseParse.response[i];
        let history = document.getElementById('history');

        history.innerHTML += '<div style="width: 50%;float:left;text-align: left;">' + historyLink(responseJSON.link, responseJSON.title) + '<br/>' + historyCounts(responseJSON.posts) + '</div>';
    }
});