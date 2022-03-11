import { NextPage, GetStaticProps } from 'next'

import { Grid } from '@nextui-org/react'

import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pókemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </Grid.Container>
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
