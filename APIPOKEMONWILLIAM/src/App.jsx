import { useState, useEffect } from 'react';
import Button from './Components/button';
import Coisas from './Components/coisas';
import styles from './Components/styles.module.css';

function BuscaPokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [busca, setBusca] = useState(''); 

  const carregarPokemon = async (parametroBusca) => {
    const termoFinal = parametroBusca || busca;

    if (!termoFinal || termoFinal.toString().trim() === '') {
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const termoBusca = termoFinal.toString().toLowerCase().trim();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${termoBusca}`);
      if (!response.ok) {
        throw new Error('Pokémon não encontrado!');
      }
      const data = await response.json();

      const speciesResponse = await fetch(data.species.url);
      if (!speciesResponse.ok) {
        throw new Error('Dados da espécie não encontrados!');
      }
      const speciesData = await speciesResponse.json();
      const typeone = data.types[0]?.type.name || null;
      const typetwo = data.types[1]?.type.name || null;
      const categoryObj = speciesData.genera.find(item => item.language.name === 'en');
      const category = categoryObj ? categoryObj.genus : "Unknown";
      
      setPokemon({
        ...data,
        color: speciesData.color.name,
        typeOne: typeone,
        typeTwo: typetwo,
        category: category
      });

    } catch (err) {
      setError(err.message === 'Failed to fetch' ? 'Erro de conexão com a API' : err.message);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  const Aleatorio = () => {
    const numeroGerado = Math.floor(Math.random() * 1025) + 1;

    setBusca(numeroGerado.toString());
    carregarPokemon(numeroGerado);
  };

  useEffect(() => {
  }, []);


  return (
    
      <div style={{backgroundColor: pokemon?.color || "white"}} className={styles.div}>
        <div className={styles.div2}>
          <Button busca={busca} setBusca={setBusca} carregarPokemon={carregarPokemon} Aleatorio={Aleatorio}/>

          {loading && <p>Buscando na Pokédex...</p>}
          {error && <p>{error}</p>}

          {pokemon && !loading && (
            <Coisas id={pokemon.id} category={pokemon.category}typeone={pokemon.typeOne} typetwo={pokemon.typeTwo} color={pokemon?.color} name={pokemon.name} sprite={pokemon.sprites.other['official-artwork'].front_default} />
          )}
        </div>
      </div>
    
  );
}

export default BuscaPokemon;