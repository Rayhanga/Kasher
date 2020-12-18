import React from 'react'

export function InputField({ type, id, onChange, value, children }) {
    return (
        <fieldset className="flex flex-col">
            <label className="font-semibold ml-2">{children}</label>
            <input type={type} id={id} className="p-2 rounded-lg h-10" onChange={onChange} value={value}/>
        </fieldset>
    )
}