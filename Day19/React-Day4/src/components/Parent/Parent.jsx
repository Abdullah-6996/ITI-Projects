import React, { useState } from 'react'
import Child from '../Child/Child';

export default function Parent() {
    let [product, setProduct] = useState({
        id: 1,
        prodName: `Apple iPhone 13`,
        price: 5000,
        quantity: 250,
        onSale: true,
    });

    return (
        <>
            <div className="container-fluid">
                <h1 className='bg-success text-light text-center p-4 mt-3'>Parent</h1>
                <Child productDetails={product}/>
            </div>
        </>
    )
}
