import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Parent from '../Parent/Parent'

export default function Home() {
    let [counter, setCounter] = useState(0);
    function increase() {
        setCounter(counter + 1);
    }
    return (
        <>
        {/* <Navbar />
        <h2>Welcome to React!</h2>
        <button className='btn btn-primary my-3 mx-3' onClick={increase}>Counter:{counter}</button> */}
        <Parent />
        {/* <About />
        <Footer /> */}
        </>
    )
}