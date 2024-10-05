export const convertNumberToMoney =(number, localCurrency)=>{
    const formatter = new Intl.NumberFormat(localCurrency);

    return formatter.format(number);

}

