export default function Child({productDetails, userName}) {
    let {name, price, onSale} = productDetails;

    return (
        <>
            <div className="container">
                <h1 className="bg-body-tertiary">Child</h1>
                <h2 className="bg-success">User Name: {userName}</h2>

                <div className="container">
                    <h3>Product Details</h3>
                    <h5>Product Name: {name}</h5>
                    <h5>Product Price: {price}</h5>
                    <h5>Product Sale: {onSale === true ? '10%' : 'No Sale'}</h5>
                </div>
            </div>
        </>
    );
}
