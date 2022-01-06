import moment from 'moment'

export const formatDateInput = (value:string) => {
    try {
        if (typeof value != 'string') {
            value = value + ''
        }

        if( (/T|Z/g).test(value) ) return value = moment(value).format('DD/MM/YYYY')

        const rawDate = value.replace(/\//g,'');
        const dayDigits = rawDate.substr(0,2);
        const monthDigits = rawDate.substr(2, 2);
        const yearDigits = rawDate.substr(4, 4);
        const maskedString = `${dayDigits}`+(monthDigits && `/${monthDigits}`) + (yearDigits && `/${yearDigits}`)
        return maskedString
    } catch (e) {
        return ''
    }
}

export const formatMoney = (amount:number, decimalCount = 2, decimal = ",", thousands = ".") => {
    try {

        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";
        amount = Number(Math.abs(Number(amount) || 0).toFixed(decimalCount))
        let i = parseInt(amount.toString()).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - Number(i)).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
        return '0,00'
    }
};

export const formatMoneyInput = (amount:number, decimalCount = 2, decimal = ",", thousands = ".") => {
    
    amount = parseStringToNumber(removeSpecialCharacters((amount).toString()))/100

    return formatMoney(amount, decimalCount, decimal, thousands)
}


export const removeSpecialCharacters = (string:string) => {
    return string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
};


export const parseStringToNumber = (value:any) => {
    try {
        const rawValue = isNaN(value) ? value.replace(/\./g,'').replace(',','.') : value
        return parseFloat(rawValue)
    } catch (e) {
        console.log(e)
        return 0;
    }
};
