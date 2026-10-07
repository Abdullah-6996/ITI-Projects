export default function Child({productDetails, userName}) {
    let {product, rooms, price, onSale} = productDetails;

    return (
        <>
            <div className="container">
                <h1 className="bg-warning">Child</h1>
                <h2 className="bg-success">User Name: {userName}</h2>

                <div className="container">
                    <h3>Product Details</h3>
                    <h5>Product Name: {product}</h5>
                    <h5>Rooms Number: {rooms}</h5>
                    <h5>Product Price: {price}</h5>
                    <h5>Product Sale: {onSale === true ? '7%' : 'No Sale'}</h5>
                </div>
            </div>
        </>
    );
}
