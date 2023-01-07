import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { Div, CardPokemon } from "./PokemonsHome.styled";
import { GlobalContext } from "../../components/Context/context";
import { useContext } from "react";
import { irParaPokedex } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import fundo1 from "../../assets/fundo1.svg"


export const HomePokemons = () => {
  const context = useContext(GlobalContext);
  const { pokelista, adicionaPokedex, pokedex } = context;

  // const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const filtraPokemon = () =>
    pokelista.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonNaPokedex) => pokemonInList.name === pokemonNaPokedex.name
        )
    );
  return (
    <CardPokemon>
      <div className="header-logo">
        <img src={logo} />
        <button className="button" onClick={() => irParaPokedex(navigate)}>
          <h2>Pokédex</h2>
        </button>
      </div>

      <Div>
        <h1 className="h1"> Todos Pokémons</h1>
        {filtraPokemon().map((pokemon) => (
          //chamando a url - pokemons da API
          <PokemonCard
            key={pokemon.url}
            pokemonurl={pokemon.url}
            adicionaPokedex={adicionaPokedex}
          />
        ))}
      </Div>
      <div className="fundo-card1">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card2">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card3">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card4">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card5">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card6">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card7">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card8">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card9">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card10">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card11">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card12">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card13">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card14">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card15">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card16">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card17">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card18">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card19">
  <img src={fundo1} width="200px"/>
</div>

<div className="fundo-card20">
  <img src={fundo1} width="200px"/>
</div>

    </CardPokemon>
  );
};
