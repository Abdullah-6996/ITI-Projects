import React from 'react'

export default function Button() {
    const buttonStyle = {
        backgroundColor: `teal`,
        color: `whitesmoke`,
        padding: `8px 25px`,
        borderRadius: `8px`,
        border: `none`,
        margin: `5px 20px`,
    };

    return (
        <>
            <button style={buttonStyle}>Click Me</button>
        </>
    )
}
