import React from 'react'

export default function HeroActions({ children }) {
    return (
        <div className="flex flex-row gap-4 items-center">
            {children}
        </div>
    )
}