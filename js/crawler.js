function getIdentifier() {
    if (location.hostname == 'rent.591.com.tw') {
        let rent591Id = document.getElementById('propNav').querySelector('i').innerHTML.filterString('（', '）').trim();
        let phoneNumber = document.querySelector('.num').innerHTML.trim();
        return rent591Id + '/' + phoneNumber;
    }
}

function getPageHref() {
    console.log(location.hostname);
    if (location.hostname == 'rent.591.com.tw') {
        let temp=getHrefWithoutGET();
        temp=temp.filterString('http://', 'https://')
        return temp;
    }
}