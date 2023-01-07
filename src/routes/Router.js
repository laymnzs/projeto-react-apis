import { BrowserRouter, Routes, Route } from "react-router-dom"
import {HomePokemons} from "../pages/PokemonsHome/PokemonsHome";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailsPage from "../pages/PokemonDetailsPage/PokemonDetailsPage";

function Router (){
    return (
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePokemons />} />
         <Route path="/pokedexPage" element={<PokedexPage />} />
         <Route path="*" element={<PokemonDetailsPage />} />
       </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;
  