import React from 'react'

function Button({color ,colorChange}) {
    return (
        <button
            onClick={colorChange}
            className=" w-auto  px-4 py-1 rounded-full text-white shadow-2xl "
            style={{ background: color }}
        >{color}</button>
    )
}

export default Button
