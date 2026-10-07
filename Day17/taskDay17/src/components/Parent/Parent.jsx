import { useState } from "react";
import Child from '../Child/Child'

export default function Parent() {    
    let [userName, setUserName] = useState('Abdullah')
    let [product, setProduct] = useState({
        product: 'Duplex Apartment',
        rooms: '3 Rooms per floor',
        price: '13.65 Million',
        onSale: true,
    })
    return (
        <>
            <div className="container-fluid">
                <h1 className="bg-success text-center">Parent</h1>
                <h2 className="bg-danger text-dark text-center">User Name: {userName}</h2>
                <Child userName={userName} productDetails={product}/>
            </div>
        </>
    );
}
