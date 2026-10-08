import React from 'react'
import Button from '../Button/Button'
import cssStyle from './About.module.css'

export default function About() {
    return (
        <>
            <div className="container-fluid text-2xl bg-warning p-4 mt-3 text-center text-light">
                <h2>About</h2>
            </div>
            <p className="title">Lorem, ipsum dolor.</p>
            <Button />
            <button className={cssStyle.button}>Click Me</button>
            <p className={cssStyle.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, tenetur.</p>
        </>
    )
}
