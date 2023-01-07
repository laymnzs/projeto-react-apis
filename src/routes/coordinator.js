//IRÁ GUARDAR FUNÇÕES DE REDIRECIONAMENTO

export const irParaInicio = (navigate) => {
    navigate("/");
  };
  
  export const irParaPokedex = (navigate) => {
    navigate("/pokedexPage");
  };
  
  export const irParaDetalhes = (navigate, pokemonName) => {
    navigate(`/${pokemonName}`);
  };