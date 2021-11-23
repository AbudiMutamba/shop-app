import {useRef, useState } from 'react'

import {useCart} from '../contexts/Cart'

import Countries from '../helpers/countries.element'

import Districts from '../helpers/districts.element'

import USA from '../helpers/us.state.element'

import { getCountryZone } from '../helpers/shipping'

import axios from 'axios'

import { currencyFormatter, ugandaShillings } from '../helpers/currency.format'
//legend is a title of a fliedset
//fliedset is a group

function Checkout() {
    const checkoutRef = useRef()

    const {total} = useCart()

    const [country, setCountry] = useState('Uganda')

    const [shipping, setShipping] = useState(0)

    const [discount, setDiscount] = useState(0)

   // const [voucher, setVoucher] = useState({})

    const [zone, setZone] = useState(null)

    const[patasenteOption,setPatasenteOption] = useState(null)

    const[patasentePhone, setPatasentePhone] = useState(null)

    const[mtnSecretCode,setMTNSecretCode] = useState(null)

    const [secretCode, setSecretCode] = useState(null)

    // const vouchers = [
    //     {code: 'xxx', percentage: 10, status:'active', amount:10000},
    //     {code: 'yyy', percentage: 15, status:'expired', amount:10000},
    //     {code: 'zzz', percentage: 20, status:'active', amount:null},
    //     {code: 'ddd', percentage: 40, status:'expired', amount:10000},
    // ]
    

    const vouchers = {
        xxx:{rate:10, status:'active', amount:10000},
        yyy:{rate:20, status:'expired', amount:10000},
        zzz:{rate:30, status:'active', amount:null},
        ddd:{rate:40, status:'expired', amount:10000},
        www:{rate:null, status:'expired', amount:10000},
        nnn:{rate:null, status:'active', amount:null}
    }
    const [tax, setTax] = useState(0)

    const handlePayment = async (event) => {
        event.preventDefault()
        console.log('Payment submitting')
        let data= {
            'amount' : Number(total),
            'email': 'davidwampaba@gmail.com',
            'phone': Number(patasentePhone),
            'secret_code': Number(mtnSecretCode),
            'mobile_money_company_id': 1,
            'reason': 'Purchase on DevShop'

        }

        try{
            const RESULTS = await axios.post('/patasente/send-payment',data)
            console.log(RESULTS)
        }catch (error) {
            console.error(error)
        }

    }

    const getVoucherInfo = (appliedVoucher) => {
        let theVoucher = vouchers[appliedVoucher]

        if(theVoucher) {
        
            if(theVoucher['status'] !== 'expired') {
            if(!theVoucher['rate'] && !theVoucher['amount']) return { msg: 'Invalid Voucher' }
            return theVoucher['amount'] > 0 ? {amount: theVoucher['amount']} : {rate: theVoucher['rate']}
            }

            return {msg: 'Expired voucher'};

        } 

        return {msg: 'Invalid voucher'}
    
    }    

    return (
        <div>
          <h1>Checkout</h1>
            <form ref={checkoutRef} method="post">

                <fieldset>
                        <legend>Billing info</legend>
                        <div>
                            <lable>First name</lable>
                            <input type="text" placeholder="Name" />
                        </div>
                </fieldset>

                <fieldset>
                    <legend>Shipping info</legend>

                    <div>
                        <label>Name <span className="required-label">*</span></label>
                        <input type="text" required placeholder="Name"  />
                    </div>

                    <div>
                        <label>Company (optional)</label>
                        <input type="text" placeholder="Company" />
                    </div>

                    <div>
                        <lable>Address line 1 <span className="required-lable">*</span></lable>
                        <input type="text" placeholder="Ex. Suite no. Apt No. Plot No. Rd"  />
                    </div>

                    <div>
                        <label>Address line 2</label>
                        <input type="text" placeholder="State, zipcode, town"  />
                    </div>

                    <div>
                        <label>Country</label>
                        <Countries onChange = {(event) =>{
                             setCountry(event.target.value)
                             setZone(getCountryZone(event.target.value))
                        }} required id="country"/>
                    </div>

                    { country === 'Uganda' ?
                        <>
                            <div>
                                <label>District<span class="required-label">*</span></label>
                                <Districts id="district"/>
                            </div>
                        
                            <div>
                                <label>Town/Village</label>
                                <input type="text" placeholder="Town/Village" />
                            </div>
                        </>

                        :

                        <>
                            {country === 'Untied States' ?  <div>
                                    <label>State<span class="required-label">*</span></label>
                                    <USA id="us_state"/>
                                </div> 
                                :
                                <div>
                                    <label>State<span class="required-label">*</span></label>
                                    <USA id="state"/>
                                </div>
                                }
                                <div>
                                    <label>Town/City</label>
                                    <input type="text" placeholder="Town/City" />
                                </div>

                                <div>
                                    <label>Zip Code/Postal code</label>
                                    <input type="text" placeholder="Postal Code"/>
                                </div>
                            
                        </>

                    }
                </fieldset>
             
                    {zone?.error
                      ?
                      <div>{zone.error}</div>
                      :
                       <fieldset>
                            <legend> Shipping methods</legend>
                       
                         {zone && zone.map(theCompany =>
                            <div>
                                <h1>{theCompany.company}</h1>
                            {
                                theCompany.classes.map((companyClass,index) =>
                                    <div key={`${theCompany.company}_${companyClass.label}`.toLocaleLowerCase().replace('','_')}>
                                        <input
                                            onChange = {(event) => {
                                            setShipping(0)
                                            setShipping(Number(event.target.getAttribute('data-cost')))
                                         }}
                                            id={`${theCompany.company}_${companyClass.label}`}
                                            type='radio' name="shipping_class" 
                                            value={`${theCompany.company}_${companyClass.label}`}
                                            data-cost={companyClass.cost}
                                         />

                                        <label htmlFor={
                                            `${theCompany.company}_${companyClass.label}`
                                        } > 
                                        {`${companyClass.label} ${companyClass.cost}`}      
                                        </label>
                                       
                                    </div>
                                )
                            }
                            </div>
                            )}
                      
                         </fieldset>
                    }
            
                <fieldset>
                    <legend>Cart Details</legend> 
                    <p>Subtotal {total}</p>
                    <p>shipping {shipping}</p>
                    <p>Discount {discount}</p>
                    <p>Tax {tax}</p>
                    <p>Total {currencyFormatter((total + shipping + tax - discount), 'UGX', 'en-US')}</p>
                </fieldset>
   
               <fieldset>
                   <legend>Payment</legend>
                    <div>
                        <p>Voucher Code</p>
                        <input type="text" placeholder="Voucher code" onBlur={(event) => {
                            const voucherInfo = getVoucherInfo(event.target.value)
                            if(voucherInfo?.msg){
                                event.target.value = voucherInfo.msg
                            } else {
                                
                                voucherInfo?.amount ? setDiscount(voucherInfo.amount) : setDiscount((voucherInfo.rate / 100) * total)  
                            }
                        }}/>
                    </div>

                    <div>
                        <h1>Patasente</h1>
                        <select onChange = {(event) => setPatasenteOption(Number(event.target.value))}>
                            <option>-Select-</option>
                            <option value="1">MTN</option>
                            <option value="2">Airtel</option>
                        </select>
                        { patasenteOption === 1 ?
                        <>
                            <p>
                                <input onChange = {event => setPatasentePhone(event.target.value)} placeholder="Phone Number" />
                            </p>

                            { ! mtnSecretCode &&
                                <button onClick = { async (event) => {
                                    event.preventDefault()
                                try {
                                    const data ={
                                        phone: Number(patasentePhone),
                                        mobile_money_company_id: 1,
                                        //username : 'davidwampamba@gamil.com'
                                    };
                                    // const URL = `${process.env.REACT_APP_PATASENTE_URL}\\${process.env.REACT_APP_KEY}\\$${proces.env.REACT_APP_PATASENTE_GATEWAY}`

                                    fetch('/patasente', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify(data)
                                    })
                                    .then(response => response.json())
                                    .then(data => {
                                        console.log('Success',data);
                                    })
                                    .catch((error)=> {
                                        console.error('Error',error);
                                    });
                                /*

                                const RESULTS = await fetch(URL,
                                    {
                                        method :'POST',
                                        headers: {
                                            'Access-Control-Allow-Origin': '*',
                                            'Content-Type': 'application/json',
                                            'Accept': 'application/json',
                                            'mode':'no-cros'
                                        },
                                        body: JSON.stringify(data)
                                    })
                                    
                                    console.log(RESULTS.data)
                                    if(RESULTS.data.status === 'success'){
                                        setMTNSecretCode(RESULTS.data.token)
                                    }*/

                                }catch(error){
                                    console.log(error)
                                }
                             }}> Request Token</button> }
                            
                                {
                                    mtnSecretCode && <>
                                        <input placeholder ="Secert Code" onChange={(event) => setSecretCode(event.target.value)}/>
                                        <div>
                                             <button submit>Pay</button>
                                        </div>
                                    </>
                                }     
                        </>
                        :
                        <>
                            <p>
                                <input placeholder ="Phone Number" />
                            </p>
                            <p>
                                <input placeholder="Secrete code..." onChange={(event) => secretCode(event.target.value)}/>
                            </p>
                            <input type="submit" value = "Pay Now" />
                        </>
                      }
                    </div>
                </fieldset>
            </form>
            
        </div>
    )
}

export default Checkout


/**
 * Apply discounts using vouchers in e-Commerce

1. Generate a bank of vouchers and store them
2. Retrieve the vouchers
3. Retrieve voucher from the retrieved vouchers
    1. Is voucher not found -> Return and show invalid message
    2. Is voucher found, check it’s value
        1. Is value Falsy, Return and show invalid message
4. Get voucher status
    1. Is active, apply voucher value to generate discount
    2. Else return expired message
 */