import {useRef, useState } from 'react'

import {useCart} from '../contexts/Cart'

import Countries from '../helpers/countries.element'

import Districts from '../helpers/districts.element'

import USA from '../helpers/us.state.element'

import { currencyFormatter, ugandaShillings } from '../helpers/currency.format'
//legend is a title of a fliedset
//fliedset is a group

function Checkout() {
    const checkoutRef = useRef()

    const {total} = useCart()

    const [country, setCountry] = useState('Uganda')

    const [shipping, setShipping] = useState(0)

    const [discount, setDiscount] = useState(0)

    const [voucher, setVoucher] = useState('')

    const vouchers = ['10% off', '20% off', '30% off']

    const [tax, setTax] = useState(0)



    const handlePayment = () => {

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
                        <label>Name <span calss="required-label">*</span></label>
                        <input type="text" required placeholder="Name"  />
                    </div>

                    <div>
                        <label>Company (optional)</label>
                        <input type="text" placeholder="Company" />
                    </div>

                    <div>
                        <lable>Address line 1 <span class="required-lable">*</span></lable>
                        <input type="text" placeholder="Ex. Suite no. Apt No. Plot No. Rd"  />
                    </div>

                    <div>
                        <lable>Address line 2</lable>
                        <input type="text" placeholder="State, zipcode, town"  />
                    </div>

                    <div>
                        <label>Country</label>
                        <Countries onChange = {(event) => setCountry(event.target.value)} id="country"/>
                    </div>

                    { country === 'Uganda' ?
                        <>
                            <div>
                                <label>District<span class="required-label">*</span></label>
                                <Districts id="district"/>
                            </div>
                        
                            <div>
                                <label>Town/City</label>
                                <input type="text" placeholder="Town/City" />
                            </div>
                        </>

                        :

                        <>

                            <div>
                                <label>State<span class="required-label">*</span></label>
                                <USA id="us_state"/>
                            </div>

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
                        <input type="text" placeholder="Voucher code" />
                    </div>
                        <label>MoMo/MobileMoney<input type="radio" name="payment_method" value="momo" /></label>
                        <label>Airtel<input type="radio" value="momo" name="payment_method" /></label>
                </fieldset>
                <button type="submit" onClick={handlePayment}>Pay Now</button>
            </form>
            
        </div>
    )
}

export default Checkout
