import React from 'react'
import Card from "./components/card"
import Navbar from "./components/navbar"
import Data from './data.js'


export default function App(){
    const dataArray = Data.map(card => {
        return (<div>
            <Card 
            {...card}
        />
        <hr/></div>)
    })
    console.log(Data);
    return (
        <div className="">
            <Navbar />
            {dataArray}
        </div>
    )
}