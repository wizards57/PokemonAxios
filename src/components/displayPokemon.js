import React from 'react';
import Pokemon from './pokemon';

const DisplayPokemon = ({pokemon}) =>{

    return(
        <div className="pokemon-containers">
            <div className="all-container">  
            {
 
                    pokemon.map((val, idx) =>
                   
                    <Pokemon key={idx} thispokemon={val} />
                    
                    
                )
            }

            </div>  
        </div>

    );
}

export default DisplayPokemon;