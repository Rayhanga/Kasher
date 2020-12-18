import React from 'react'

export default function HeroTitle({ title, subtitle }) {
    return (
        <div className="flex flex-col gap-2 text-center sm:text-left">
            <h1 className="font-bold text-gray-500 text-5xl">
                {title}
            </h1>
            <h2 className="font-bold text-gray-500 text-lg">
                {subtitle}
            </h2>
        </div>
    )
}