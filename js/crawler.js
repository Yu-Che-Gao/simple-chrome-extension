function getIdentifier() {
    if (location.hostname == 'rent.591.com.tw' || location.hostname == 'www.591.com.tw') {
        let rent591Id = location.href.split('-')[2].split('.')[0];
        console.log(rent591Id);
        let phoneNumber = document.querySelector('.num').innerHTML.trim();
        return rent591Id + '/' + phoneNumber;
    }
}

function getIdOfPage() {
    if (location.hostname == 'rent.591.com.tw' || location.hostname == 'www.591.com.tw') {
        return location.href.split('-')[2].split('.')[0];
    }
}

function getPhoneNumberOfPage() {
    if (location.hostname == 'rent.591.com.tw' || location.hostname == 'www.591.com.tw') {
        return document.querySelector('.num').innerHTML.trim();
    }
}