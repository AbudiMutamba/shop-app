import React from 'react'

function Home() {

    const items = [
        {
            name: "Blue T-shirt",
            category: "All",
            price: 35000
        },
        {
            name: "Shoes",
            category: "Men",
            price: 40000
        },
        {
            name: "Dress",
            category: "Ladies",
            price: 50000,
        },
        {
            name:"Macbook Air",
            category: "Tech",
            price: 4000000,
        }
    ]
    return (
        <div className = "container">
            <ul>
            {
                items.map ((item, index)=> {
                    return (
                        <>
                        <li key = {index.toString()}>
                        <div>
                            <h1> {item.name} </h1>
                        </div>
                        <div>
                            {item.category}
                        </div>
                        <div>
                            <h4>price: {item.price}</h4>
                        </div>
                        </li>
                        <button className = "btn">Add to Cart</button>
                        <button className = "btn">Remove from Cart</button>
                        <button className = "btn">Buy Now</button>
                        </>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Home
