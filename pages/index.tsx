import { NextPage, GetStaticProps } from 'next'

import { Grid } from '@nextui-org/react'

import { Layout } from '../components/layouts'
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pókemons'>
      <Grid>
        {pokemons.map(({ id, name }) => (
          <li key={id}>#{id} - {name}</li>
        ))}
      </Grid>
    </Layout>
  )
}


const templateImg = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: { results } } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151')

  const pokemons: SmallPokemon[] = results
    .map(
      (pokemon, i) => ({
        ...pokemon,
        id: i + 1,
        img: templateImg(i + 1)
      })
    )

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
