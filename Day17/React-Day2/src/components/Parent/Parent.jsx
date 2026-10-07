import { useState } from "react";
import Child from "../Child/Child";

export default function Parent() {
    let [userName, setUserName] = useState('Abdullah')
    let [product, setProduct] = useState({
        name: 'Iphone 17 pro max',
        price: '$1500',
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
