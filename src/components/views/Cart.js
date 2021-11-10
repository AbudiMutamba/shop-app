import {useEffect} from 'react'

import {useCart} from '../contexts/Cart'

import {Link} from 'react-router-dom'

function Cart() {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency:'UGX'
    })

    const {itemsInCart, setItemsInCart, total, setTotal} = useCart();
    //let {total, setTotal} = useState(0) 

    useEffect(() => {
        let defaultTotal = 0;
        setTotal(itemsInCart.reduce((currentItem, previousItem) => defaultTotal += previousItem.subtotal, 0))
    },[])

 const removeItem = itemID => {
    const newCartItems = itemsInCart.filter(itemInCart => itemInCart._id !== itemID)
    return newCartItems
 }

 const returnTotal = (newCart) =>{
     let sum = 0
     newCart.forEach( item => sum += item.subtotal)
     return sum;
 }

    if (itemsInCart?.length>0)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {itemsInCart.map((itemsInCart, index) => */}
                    {itemsInCart.map(itemInCart => 
                        <tr className= "cart-item" key={itemInCart._id}>
                            <td>
                                {itemInCart.name}
                                <button  onClick ={() => {
                                    let newCart =  removeItem (itemInCart._id)
                                    setItemsInCart([...newCart])
                                    setTotal(returnTotal(newCart))
                        
                                }}>
                                        Remove Cart
                                </button>
    
                            </td>    
                         <td>

                            <input
                                type="number"
                                min="1"
                                //value={}
                                defaultValue={itemInCart.qty}
                                placeholder={itemInCart.qty}
                                onChange= {(event) => {
                                    //const item = itemsInCart[index]
                                    //item['qty']= Number(event.target.value)
                                    //item['subtotal'] = Number(item.qty) * Number(item.price)
                                    //itemsInCart[index] =item
                                    let {value: quantity } = event.target

                                    itemInCart.qty =quantity > 0 ? quantity : 1
                                    itemInCart.subtotal = itemInCart.qty * itemInCart.price
                                    setItemsInCart([...itemsInCart])

                                    // const subTotals = itemsInCart.map(itemInCart => itemInCart.subtotal)
                                    // const reducer = (currentItem, previousItem) => {
                                    //    return currentItem.subtotal + previousItem.subtotal
                                    //}
                                    //setTotal(subbTotals.reduce(reducer)) */

                                    let newTotal = 0 
                                    itemsInCart.forEach(itemInCart => newTotal += itemInCart.subtotal)
                                    setTotal(newTotal)
                                    // setTotal(itemsInCart.reduce((currentItem, previousItem) => currentItem.subtotal + previousItem.subtotal, 0))
                                }
                            }/>
                          </td>
                          <td>{formatter.format(itemInCart.price)}</td>
                          <td>{formatter.format(itemInCart.subtotal)}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                        <tr>
                             <th></th>
                             <th>
                             </th>
                             <th>Total</th>
                             <th>{formatter.format(total)}</th>
                        </tr>
                </tfoot>
            </table>
           
        </div>
    )

    return(
        <>
            <h1>Your basket is empty</h1>
            <p><Link to ="/">Shop Now</Link></p>
        </>
    )
}

export default Cart
