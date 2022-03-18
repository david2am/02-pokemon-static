import { useEffect, useState } from 'react';


import { Layout } from "../../components/layouts"
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons())
  }, [])
  

  return (
    <Layout title="Pokemons favoritos">
      {
        favoritePokemons.length === 0
          ? ( <NoFavorites/> )
          : ( <FavoritePokemons pokemons={favoritePokemons} /> )
      }
    </Layout>
  )
}

export default FavoritesPage