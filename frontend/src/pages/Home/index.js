import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import api from '../../services/api'

import '../reset.css'
import './Home.css'

import pokewallpaper from '../../img/pokewallpaper.png'

export default function Home() {

    const [data, setData] = useState([]);

    async function loadData(){

        const response = await api.get('all');
        
       await setData(response.data);
        
    }

    useEffect(()=>{

        loadData();

    },[]);

    return (
        <div className="container">
            <div className="pokewallpaperContainer">
            
                <img src={pokewallpaper} className="pokewallpaper" />

            </div>

            
                <ul className="pokeImgList">

                    {data.map((pokemon)=>{

                        const image = pokemon.id < 10 ? `00${pokemon.id}` : pokemon.id < 100 ? `0${pokemon.id}` : `${pokemon.id}`

                        return <li>
                        <Link style={{textDecoration:'none'}} to={`/pokemon/${pokemon.id}`}>
                            <div className="pokeImgContainer" >
                                <img src={require(`../../assets/images/${image}.png`)} className="pokeImg" />
                                <p className="pokeName">{pokemon.english}</p>
                            </div>
                        </Link> 
                    </li>
                    
                    })}    

                </ul>
            </div>
       
    )
}
