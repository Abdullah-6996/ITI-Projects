import React, { useState } from "react";
import Recieve from "../Recieve/Recieve";

export default function Send() {
    let prodArray = [
        {id: 1, prodName: `Samsung`, price: 3000, Sale: false, desc: `Samsung Mobile Phone`, quantity: 0},
        {id: 2, prodName: `Oppo`, price: 5000, Sale: false, desc: `Oppo Mobile Phone`, quantity: 0},
        {id: 3, prodName: `TV`, price: 15000, Sale: true, desc: `Smart TV`, quantity: 0},
        {id: 4, prodName: `PC`, price: 12000, Sale: true, desc: `HighEnd PC`, quantity: 0},
        {id: 5, prodName: `Camera`, price: 10000, Sale: false, desc: `DSLR Camera`, quantity: 0},
        {id: 6, prodName: `iPad`, price: 15000, Sale: true, desc: `Apple iPad`, quantity: 0},
        {id: 7, prodName: `Tab`, price: 4000, Sale: false, desc: `Android Tab`, quantity: 0},
    ];
    let [products, setProducts] = useState(prodArray);

    function deleteProduct(prodId) {
        setProducts( products.filter((product) =>
        product.id !== prodId));
    }

    return (
        <>
            <div className="container-fluid bg-info p-3 my-3">
                <div>
                    {products.map((product) =>
                    <Recieve product={product}
                    deleteProduct={deleteProduct}/>)}
                </div>
            </div>
        </>
    );
}
