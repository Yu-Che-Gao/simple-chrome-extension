function getHref() {
    return location.href;
}

function getHostName() {
    return location.hostname;
}

String.prototype.clearProtocol = function () {
    let temp = this;
    for (let i = 0; i < arguments.length; i++) {
        temp = this.replace(arguments[i], '');
    }
    return temp;
}