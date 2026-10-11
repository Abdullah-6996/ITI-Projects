import React from 'react'

export default function Child({productDetails}) {
    let {prodName, price, quantity, onSale} = productDetails;
    return (
        <>
            <div className="container-fluid">
                <h1 className='bg-dark text-light text-center p-4 mt-3'>Child</h1>
                <div className="container bg-info p-3">
                    <h3 className='text-center text-light'><strong>Product Details</strong></h3>
                    <h4>Product Name: {prodName}</h4>
                    <h4>Product Price: {price}</h4>
                    <h4>Product Quantity: {quantity}</h4>
                    <h4>Product Sale: {onSale === true ? `50%` : `No Sale`}</h4>
                </div>
            </div>
        </>
    )
}
