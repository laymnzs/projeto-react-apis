import React from 'react'
//import { useParams } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { Detalhes } from './PokemonDetails.styled'
import { useNavigate } from "react-router-dom";
import { irParaInicio } from "../../routes/coordinator";
import fundo from "../../assets/fundo.svg"
import rectangle from "../../assets/rectangle.svg"
import bab from "../../assets/bab.svg"
import rec10 from "../../assets/rec10.svg"
import barra from "../../assets/barra.svg"
import tit1 from "../../assets/tit1.svg"
import tit2 from "../../assets/tit2.svg"
import tit3 from "../../assets/tit3.svg"
import tit4 from "../../assets/tit4.svg"
import tit5 from "../../assets/tit5.svg"
import poison from "../../assets/poison.svg"
import grass from "../../assets/grass.svg"
import recbaby from "../../assets/recbaby.svg"
import recbabyfin from "../../assets/recbabyfin.svg"
import namebub from "../../assets/namebub.svg"
import idbub from "../../assets/idbub.svg"


const PokemonDetailsPage = () => {

  //usando HOOKS
//  const params = useParams()

//para redirecionar
const navigate = useNavigate();


  return (
    /*<>
    {params.pokemonDetailsPage}
    </>*/
    <Detalhes>
    <div className="header-logo">
      <img src={logo} />
      <button className="button" onClick={() => irParaInicio(navigate)}>
          <h2>Excluir da Pokédex</h2>
        </button>
    </div>

<div>
        <h1 className="onclickpokemon" onClick={() => irParaInicio(navigate)}>Todos Pokémons</h1>
      </div>

      <section>
        <h1><b>Detalhes</b></h1>




<div className="fundo">
  <img src={fundo}/>
</div>

<div className="rectangle">
<img src={rectangle} width="1250px"/>
</div>

<div className="namebub">
<img src={namebub} width="230px"/>
</div>

<div className="idbub">
<img src={idbub} width="30px"/>
</div>

<div className="recbaby">
<img src={recbaby} width="250px"/>
</div>

<div className="recbabyfin">
<img src={recbabyfin} width="250px"/>
</div>


<div className="bab">
<img src={bab} width="150px" />
</div>

<div className="poison">
<img src={poison} width="100px"/>
</div>

<div className="grass">
<img src={grass} width="100px"/>
</div>

<div className="fundo-pokebola">
  <img src={fundo} width="800px"/>
</div>

<div className="rec10">
  <img src={rec10} width="250px"/>
</div>

<div className="rec11">
  <img src={rec10} width="350px"/>
</div>

<div className="barra">
  <img src={barra} width="320px"/>
</div>

<div className="tit1">
  <img src={tit1} width="80px"/>
</div>

<div className="tit2">
  <img src={tit2} width="100px"/>
</div>

<div className="tit3">
  <img src={tit3} width="100px"/>
</div>

<div className="tit4">
  <img src={tit4} width="50px"/>
</div>

<div className="tit5">
  <img src={tit5} width="100px"/>
</div>

</section>
</Detalhes>

  )
}

export default PokemonDetailsPage
