import React from 'react'

export default function Recieve({product, deleteProduct}) {
    let {id, prodName, price, onSale, desc, quantity} = product;

    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="bg-secondary text-light text-center shadow-lg p-4 rounded item position-relative">
                    <h2>Product Name: {prodName}</h2>
                    <h2>Product Price: {price}</h2>
                    <h2>Product Desc: {desc}</h2>
                    <h2>Product Quantity: {quantity}</h2>
                    {/* <h2>Product Sale: {onSale ? `50%` : `N/A`} </h2> */}
                    {/* { onSale && <span className='badge bg-danger p-2 position-absolute top-0 end-0'>OnSale</span>} */}
                    { onSale ? <span className='badge bg-danger p-2 position-absolute top-0 end-0'>OnSale</span> : ``}
                    <div className='d-flex justify-content-evenly my-3'>
                        <button className='btn btn-danger me-3' onClick={ () => deleteProduct(id) }>Delete</button>
                        <button className='btn btn-primary'>Update Count</button>
                    </div>
                </div>
            </div>
        </>
    )
}
