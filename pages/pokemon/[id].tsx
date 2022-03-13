import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';

export const PokemonPage: NextPage<Pokemon> = ({ name, sprites }) => {
  return (
    <Layout title={`Pokemon ${name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{name}</Text>
              <Button color='gradient' ghost>Guardar en favoritos</Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container display='flex' direction='row'>
                <Image
                  src={sprites.front_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.front_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={sprites.back_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
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