function getIdentifier() {
    if (location.hostname == 'rent.591.com.tw' || location.hostname == 'www.591.com.tw') {
        let rent591Id = document.getElementById('propNav').querySelector('i').innerHTML.filterString('（', '）').trim();
        let phoneNumber = document.querySelector('.num').innerHTML.trim();
        return rent591Id + '/' + phoneNumber;
    }
}