import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = ({thispokemon}) => {

    const [onePokemon, setOnePokemon] = useState({
        name: "",
        sprites: {
            front_default: "" 
        },
        types:Array[{type:{name:""}}]
            
            
                       
        
        

    });
    const [tipo, setTipo] = useState("water");
    const getPokemon =(url) =>{
        axios.get(url) 
        .then ((response) =>{
            console.log(response);
            setOnePokemon(response.data);
            setTipo(onePokemon.types['0'].type.name);
            console.log(tipo);
        })
        .catch((err)=> {
            console.log(err);
            setTipo(onePokemon.types['0'].type.name);
        })

    }
    useEffect (()=>{
        getPokemon(thispokemon.url)
    },[])

    
    return(
        <>  
            <div className={`thumb-container ${tipo}`}>
                <div className='number'>
                    <small>#0{onePokemon.id}</small>
                </div>
                <img src={onePokemon.sprites.front_default} />
                <div className="detail-wrapper">
                    <h3>{onePokemon.name}</h3>
                     <small>Type:{tipo}</small> 
                </div>
            </div>
        </>
    )

}
export default Pokemon;

