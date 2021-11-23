export const ugandaShillings = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'UGX',
});


export const currencyFormatter= (amount, countryCode ='UGX', langaugeCode= 'en-US') => {
   let formatter = new Intl.NumberFormat(langaugeCode,{
    style: 'currency',
    currency: countryCode,
   });
    return formatter.format(amount)
        
}