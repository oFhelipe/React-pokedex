import React from 'react'

import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import '../reset.css'

import './404.css'

import pokeballImg from '../../img/pokeball.png'

export default function Error() {
    return (
        <div className="Box404">
            <div className="messageContainer">
                <div className="c404">
                    4 <img src={pokeballImg} className="pokeballImg"/> 4
                </div> 
                <p style={{fontWeight:'bold'}}>ERROR</p>
                <p>Pokemon not found</p>
            </div>
            <Link style={{textDecoration:'none'}} to="/" ><div className="goBackButton"><FiArrowLeft/>Go back to home.</div></Link>

        </div>
    )
}
