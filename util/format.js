function formatDate(date) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(''), 2500);
    });
}

function formatDateSync(date) {
    if (!(date instanceof Date) || !date.valueOf()) throw new TypeError('Date object expected');

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    switch (month) {
        case 0: month = 'Января'; break;
        case 1: month = 'Февраля'; break;
        case 2: month = 'Марта'; break;
        case 3: month = 'Апреля'; break;
        case 4: month = 'Мая'; break;
        case 5: month = 'Июня'; break;
        case 6: month = 'Июля'; break;
        case 7: month = 'Августа'; break;
        case 8: month = 'Сентября'; break;
        case 9: month = 'Октября'; break;
        case 10: month = 'Ноября'; break;
        case 11: month = 'Декабря'; break;
    }

    let result = `${day} ${month} ${year} г.`;

    return result;
}

module.exports = {
    formatDate,
    formatDateSync
};