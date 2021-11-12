import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import RowPost from '../Components/RowPost/RowPost'
import Banner from '../Components/Banner/Banner'
import { originals, action } from '../urls'

function Home() {
    return (
        <div>
            <NavBar />
            <Banner />
            <RowPost url={originals} title="Netflix Originals" />
            <RowPost url={action} title="Actions" isSmall />
        </div>
    )
}

export default Home
