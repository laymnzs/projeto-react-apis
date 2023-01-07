import React from 'react';
import axios from 'axios';
import Router from '../src/routes/Router'
import { GlobalContext } from "./components/Context/context"
import { useEffect, useState } from "react";
import { BASE_URL } from "./components/constants/url";
import Swal from "sweetalert2"

function App() {
  const [pokelista, setPokelista] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    buscarPokemonNaLista();
  }, []);

  const buscarPokemonNaLista = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelista(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const adicionaPokedex = (adicionarPokemon) => {
    const estaNaPokedex = pokedex.find(
      (pokemonNaPokedex) => pokemonNaPokedex.name === adicionarPokemon.name
    );

    if (!estaNaPokedex) {
      const novaPokedex = [...pokedex, adicionarPokemon];
      setPokedex(novaPokedex);
      Swal.fire(
        'Gotcha!',
        'O Pokémon foi adicionado à sua Pokedéx!',
        'success',
      )
    }
  };
 

  const removerPokedex = (removerPokemon) => {
    const novaPokedex = pokedex.filter(
      (pokemonNaPokedex) => pokemonNaPokedex.name !== removerPokemon.name
      );
      Swal.fire(
        'Oh, no!',
        'O Pokémon foi removido da sua Pokedéx!',
        'error'
      )

    setPokedex(novaPokedex);
  };

  const context = {
    pokelista,
    adicionaPokedex,
    removerPokedex,
    pokedex,
    
    }
   
     return (
       <>
         <GlobalContext.Provider value={context}>
           <Router />
       
           {/* Pagina Inicio/> */}
         </GlobalContext.Provider>
       </>
     );
   }
   
  
export default App;
