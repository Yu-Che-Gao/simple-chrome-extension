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
        }
    };
    xhttp.open('POST', 'https://middleware-of-renthouse.azurewebsites.net/insert-url-and-phone', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send('url=' + location.href + '&phone=' + getPhoneNumberOfPage() + '&url_id=' + getIdOfPage());
}