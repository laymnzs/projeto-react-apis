import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "./PokemonCard.styled";
import  {tipoPokemon}  from "../../components/Type/type";
import { useLocation, useNavigate } from "react-router-dom";
import { irParaDetalhes } from "../../routes/coordinator";

export const PokemonCard = (props) => {
  const navigate = useNavigate();

  const { pokemonurl, adicionaPokedex, removerPokedex } = props;

  const [info, setInfo] = useState({});

  const location = useLocation();

  // console.log(pokemon)

  useEffect(() => {
    axios
      .get(pokemonurl)
      .then((response) => {
        setInfo(response.data);
        // console.log(response.data);
      })
      .catch((ERROR) => {
        console.log(ERROR);
      });
  }, []);
  console.log(info);

  return (
    <Cards className="cards1">
      <div className="cards">

        <p className="pinfo">#0{info.id} </p>
        {/* <button className="pdetalhes">Detalhes</button> */}
        
        <p className="pname">{info.name} </p>
        <div className="ptypes">

          {/* tipos dos pokemons */}
           {info.types?.map((type) => {
          // console.log(type.type.name);
            return <img src={tipoPokemon(type.type.name)} />;  
            })}
        </div>

        {/* imagens dos pokemons */}
        <img
          src={info.sprites?.other.dream_world.front_default}
          alt={info.name}
          className="pokeimg"
        />
        

        <div className="Button">
          {location.pathname === "/" ? (
            <button className="buttoncard" onClick={() => adicionaPokedex(info)}>
              Capturar!
            </button>
)

           : (
            <button
              className="buttondel"
              onClick={() => removerPokedex(info)}
            >
              Excluir
            </button>
          )}

          <p
            className="pokedetalhes"
            onClick={() => irParaDetalhes(navigate, info.name)}
          >
            Detalhes
          </p>
        </div>
      </div>

    </Cards>
    
  );
};
