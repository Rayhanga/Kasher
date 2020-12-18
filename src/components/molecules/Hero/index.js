import React from 'react'

export default function Hero({ cover, coverAlt="Hero Cover Image", width="auto", children }) {
    return (
        <header className="h-screen flex flex-col lg:flex-row mx-auto gap-8 justify-center items-center mb-16 sm:px-8">
            <img 
                src={cover} 
                className={`w-${width}`}
                alt={coverAlt}
            />
            <div className="flex flex-col items-center sm:items-stretch gap-3">
                {children}
            </div>
        </header>
    )
}