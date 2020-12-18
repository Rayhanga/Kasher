import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../../molecules/Hero'
import HeroActions from '../../molecules/HeroActions'
import HeroTitle from '../../molecules/HeroTitle'

export default function HomeHero() {
    return (
        <Hero
            cover="https://img.icons8.com/cotton/64/000000/bill-copy--v1.png"
            width="16"
        >
            <HeroTitle
                    title="Split your bill just one click away"
                    subtitle="split bills, share expenses, everyone got paid"
                />
            <HeroActions>
                <Link to="/signup" className="font-bold text-lg  bg-indigo-200 p-1">
                    get started
                </Link>
                <Link to="/signin" className="font-bold text-base">
                    i already have an account
                </Link>
            </HeroActions>
        </Hero>
    )
}