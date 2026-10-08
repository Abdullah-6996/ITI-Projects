import React from "react";

export default function Recieve({product, deleteProduct}) {
    let {id, name, price, sale, desc, quantity} = product;
    
    return (
        <>
            <div className="col-md-3 mb-4 bg-secondary">
                <div className="item bg-dark text-light text-center shadow-lg p-4 rounded position-relative">
                    <h2>Product Name: {name}</h2>
                    <h2>Product Price: {price}</h2>
                    <h2>Product Description: {desc}</h2>
                    <h2>Product Quantity: {quantity}</h2>
                    { sale ? <span className="bg-danger position-absolute top-0 end-0">OnSale</span> : `` }
                    <div className="d-flex justify-content-evenly my-3">
                        <button className="btn btn-danger rounded p-3 me-3" onClick={ () => deleteProduct(id)}>
                        Delete</button>
                        <button className="btn btn-primary">
                        Update Count</button>
                    </div>
                </div>
            </div>
        </>
    );
}
