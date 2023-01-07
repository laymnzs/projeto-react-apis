import React from 'react';
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Container } from "./Pokedex.styled";
import { BASE_URL } from "../../components/constants/url";
import { useContext } from "react"
import { GlobalContext } from "../../components/Context/context"
import { useNavigate } from "react-router-dom";
import { irParaInicio } from "../../routes/coordinator";
import logo from "../../assets/logo.png"

function PokedexPage(props) {
  // const { pokedex, removerPokedex } = props;
  const context = useContext(GlobalContext)
  const { removerPokedex, pokedex } = context

  // hook para redirecionar
  const navigate = useNavigate();

  return (
    <Container>
    
    <div className="header-logo">
        <img src={logo} />
        </div>
    
      <div>
        <h1 className="onclickpokemon" onClick={() => irParaInicio(navigate)}>Todos Pokémons</h1>
      </div>

      <section>
        <h1><b>Meus Pokémons</b></h1>

        <div className="cards">
          {pokedex.map((pokemon) => {
            return <PokemonCard
              key={pokemon.name}
              pokemonurl={`${BASE_URL}/${pokemon.name}`}
              removerPokedex={removerPokedex}
            />
          })}
        </div>
      </section>
    </Container>
  );
}

export default PokedexPage;