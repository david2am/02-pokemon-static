import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';

export const PokemonPage: NextPage<Pokemon> = ({ name }) => {
  return (
    <Layout title={`Pokemon ${name}`}>
      <h1>{name}</h1>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = (ctx) => {
  const pokemonList = [...Array(151)].map((_, index) => `${index + 1}`)

  return {
    paths: pokemonList.map((id) => ({
      params: { id } 
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: { ...data }
  }
}

export default PokemonPage