import { useState } from "react";

export default function Home() {
    let [fruits, setFruits] = useState([`Orange`, `Apple`, `Kiwi`]);
    let [counter, setCounter] = useState(0);
    
    function increase(param){
        setCounter(counter + param);
    }

    return (
        <>
            <div className="bg-danger text-light text-center text-uppercase p-3">
                <h1>Home</h1>
            </div>
            <h2>Counter: {counter}</h2>
            <div className={counter > 15 ? `d-block bg-danger` : `d-none`}>
                <ul>
                    {fruits.map((fruit) =><li>{fruit}</li>)}
                </ul>
            </div>
            <button className="btn btn-primary my-2 mx-2" onClick={function(){increase(2)}}>Increase Counter</button>
        </>
    )
}