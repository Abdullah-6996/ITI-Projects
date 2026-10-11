import React, { useEffect, useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Gallery() {
    // Hooks Area (2 Conditions)
    /*
        1. Top Level
        2. Function
    */

    // useEffect syntax
    // useEffect( () => {}, [] )
    // 1- Callback Function (Arrow Function)
    // 2- Dependacies (Empty Array)

    // 1- Mounting Stage (Phase 1)
    // (Mounting): will Mount
    // console.log(`(Mounting): will Mount`);
    // console.log(`Render...`);
    // useEffect(()=>{
    //     console.log(`(Mounting): Did Mount...`); // Mounting
    // }, [])
    // =====================================
    // console.log(`(Mounting): will Mount Phase Start`);
    // console.log(`Next Phase: Render...`);
    // useEffect(()=>{
    //     console.log(`(Mounting): Did Mount...`); // Mounting
    //     afterDidMount();
    // }, [])

    // function afterDidMount() {
    //     console.log(`Run from useEffect() after Component DidMount...`);
    // }

    // function runWithRender() {
    //     console.log(`Run from Global Scope Cause of Rendering...`);
    //     console.log(`Done: Rendering Stage.`);
        
    // }
    // runWithRender();
    // =====================================
    // 2- Updating Stage (Phase 2)
    // let [counter, setCounter] = useState(0);
    // console.log(`[Stage 0] - (Render): Did Render...`);
    // useEffect(()=>{
    //     // Stage 1
    //     console.log(`[Stage 1] - (Mounting): Did Mount!`);
    //     if(counter === 0) {
    //         return;
    //     }
    //     // Stage 2
    //     console.log(`[Stage 2] - (Updating): Did Update!`); // Mounting (Conver to) => Update? | Execute Code
    // }, [counter]) // Update Phase || If chnage == true => [0]
    // function updateCounter() {
    //     setCounter(counter + 1)
    // }
    // Action on Button => Invoke function (setFunction) => Re-Render (state or props changed) => Invoke useEffect() => Check (If Changed) => Re-Render (Updating)
    // To prevent auto update => If condition
    // Prevented to write any setFunction or auto logic execution in the global scope to avoid infinity loop
    // =====================================
    // 3- UnMounting Phase (Phase 3)
    // let [counter, setCounter] = useState(0);
    // console.log(`[Stage 0] - (Render): Did Render...`);
    // useEffect(()=>{
    //     // Stage 1
    //     console.log(`[Stage 1] - (Mounting): Did Mount!`);
    //     if(counter === 0) {
    //         return;
    //     }
    //     // Stage 2
    //     console.log(`[Stage 2] - (Updating): Did Update!`); // Mounting (Conver to) => Update? | Execute Code

    //     return () => {
    //         // Stage 3: unMounting Phase
    //         console.log(`[Stage 3] - (unMount): user Left from the component!`);
            
    //     }

    // }, [counter]) // Update Phase || If chnage == true => [0]

    // function updateCounter() {
    //     setCounter(counter + 1)
    // }

    // useEffect(()=>{
    //     console.log(`[Stage 1] - (Mounting): Did Mount!`);
    //     let clearInterval = setInterval( ()=> {
    //         console.log(`Interval Fired!`);
    //     }, 1000)
    //     return () => {
    //         console.log(`[Stage 3] - (unMount): user Left from the component!`);
    //         clearInterval(clearInterval);
    //     }
    // },[])

    // Bad Practice (Runs Everytime)
    // useEffect(()=> {
    //     console.log(`Empty useEffect()`);
    // })
    return (
        <>
            <div className="container-fluid text-2xl bg-primary p-4 mt-3 text-center text-light">
                <h2>Gallery</h2>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href='#'>Animal Gallery</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" to={`/gallery`}>Gallery Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={`cats`}>Cats</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={`dogs`}>Dogs</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            </div>
            <Outlet />
            {/* <h3>Counter: {counter}</h3>
            <button className='btn btn-secondary' onClick={updateCounter}>Increase</button> */}
        </>
    )
}
