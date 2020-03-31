import React, { useState, useEffect } from 'react'

import { useParams, Link, Redirect } from 'react-router-dom'

import api from '../../services/api'

import '../reset.css'
import './pokedex.css'


import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


export default function Pokedex() {

    const [data, setData] = useState({}); 

    const [imagem, setImagem] = useState('001');

    const [evolutions , setEvolutions ] = useState([]);

    const [type , setType ] = useState([]);

    const { idp } = useParams();    
    
    const [cor, setCor] = useState('');

    async function loadData() {
        
        

        const  response  = await api.get(`/pokemon/${idp}`);

        

        if(!response.data[0]){
            
           return await setData({erro:true});
            
        }
        else{
            const { id,
                english, 
                japanese, 
                description, 
                evolutions:evolutionsS, 
                type:typeS, 
                hp, 
                attack, 
                defense, 
                s_attack, 
                s_defense, 
                speed } = response.data[0]

            
        let evolutions = evolutionsS.split(', ');
        let type = typeS.split(', ');

        
       await setData({
            id,
            english, 
            japanese, 
            description, 
            evolutions, 
            type, 
            hp, 
            attack, 
            defense, 
            s_attack, 
            s_defense, 
            speed});

           await setEvolutions(evolutions);

           await setType(type);

            let imagem = id < 10 ? `00${id}` : id < 100 ? `0${id}` : `${id}`;

           await setImagem(imagem);


            switch (type[0]) {
                case 'Electric':
                   await setCor('#fed67a')
                    break;
        
                case 'Fire':
                   await setCor('#fc8181')
                    break;
        
                case 'Grass':
                   await setCor('#91fc81')
                    break;
                
                case 'Water':
                   await setCor('#819cfc')
                    break;
        
                case 'Bug':
                   await setCor('#48924c')
                    break;
                case 'Normal':
                   await setCor('#a5a5a5');
                    break;
        
                case 'Poison':
                   await setCor('#ba7afe')
                    break;
        
                case 'Ground':
                   await setCor('#b6a056')
                    break;
                
                case 'Fairy':
                   await setCor('#ffc4da')
                    break;
        
                case 'Fighting':
                   await setCor('#ff793b')
                    break;
                case 'Psychic':
                   await setCor('#ff3bba');
                    break;
                case 'Rock':
                   await setCor('#9f6500');
                    break;
                case 'Ice':
                   await setCor('#c8eaff');
                    break;
        
                case 'Dragon':
                   await setCor('#8e7afe');
                    break;      
                case 'Ghost':
                   await setCor('#5f2d78');
                    break;
                default:
                    break;
            


        }
        }

        
    }

    
    useEffect(()=>{

        if(isNaN(idp)){
             setData({erro:true});
        }
        else{
            loadData();
        }

        


    },[idp]);

   console.log(data);
   
    
    return (

        <div className="pokedex-container">

            {data.erro ? <Redirect to="/404"/> : <></>}

                <style  dangerouslySetInnerHTML = {{__html: `
                body{
                background-color: ${cor}
                }
                .descTitle{
                    border-color: ${cor};
                }
                `}}/>
           
            <div className="bacImage" alt="fundo">

            <Link to={`/pokemon/${(idp-1)}`} ><button className="changeButtonL" ><IoIosArrowBack/></button></Link>
            <Link to={`/pokemon/${(idp*1+1)}`} ><button className="changeButtonR"><IoIosArrowForward/></button></Link>
                        
               
                <div className="imageName" >

                    <img className="pokeImage" src={require(`../../assets/images/${imagem}.png`)} alt="Imagem pokemon" />
    <p className="pokeName" >#{data.id < 10 ? `00${data.id}` : data.id < 100 ? `0${data.id}` : `${data.id}`} {data.english}</p>
                    <p className="pokeName" >{data.japanese}</p>
                </div>


                <div className="detalhesBox">
                    <p className="descTitle">Description</p>
                    <p className="descAtribute" >{data.description}</p>
                    

                    <p className="descTitle">Base Status</p>
                    <ul className="gridInfo" >
                        <li><p className="descAtribute">HP:&nbsp;{data.hp}</p></li>

                        <li><p className="descAtribute">Attack:&nbsp;{data.attack}</p></li>

                        <li><p className="descAtribute">Defense:&nbsp;{data.defense}</p></li>

                        <li><p className="descAtribute">Esp.&nbsp;Attack:&nbsp;{data.s_attack}</p></li>

                        <li><p className="descAtribute">Esp.&nbsp;Defense:&nbsp;{data.s_defense}</p></li>

                        <li><p className="descAtribute">Speed:&nbsp;{data.speed}</p></li>
                    </ul>


                    <div className="tipoEvolutionOrientation" >
                        
                         <div className="tipoContainer" >
                            <p className="descTitle">Type</p>
                                {type.map((item)=>(
                                    <p className="descAtribute">{item}</p>
                                ))}
                        </div>

                            
                        <div className="evolutionOrientation">
                            <p className="descTitle">Evolutions</p>

                                { evolutions[0] != "" && evolutions[0] ? evolutions.map((item)=>(
                                        <Link style={{textDecoration: 'none'}} to={`/pokemon/${item}`} >
                                            <div className="evolutionContainer" key={item}>
                                                <div className="evolutionLabelContainer">
                                                    <div className="evolutionBox">
                                                        <img src={require(`../../assets/images/${item < 10 ? `00${item}` : item < 100 ? `0${item}` : `${item}`}.png`)} className="pokeEvolutionImage" />
                                                    </div>
                                                    <p className="evolutionLabel">#{item < 10 ? `00${item}` : item < 100 ? `0${item}` : `${item}`}</p>
                                                </div>
                                            </div>
                                        </Link>
                                )) : <div/> }


                        </div>
                        
                    </div>


                </div>


            </div>
            
        </div>
    )
}
