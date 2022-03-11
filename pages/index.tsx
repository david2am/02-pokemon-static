import { NextPage, GetStaticProps } from 'next'

import { Button } from '@nextui-org/react'

import { Layout } from '../components/layouts'

const HomePage: NextPage = (props) => {
  console.log(props)
  return (
    <Layout title='Listado de Pókemons'>
      <Button color="gradient">hola</Button>
    </Layout>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('hola mundo')
  return {
    props: {
      name: 'David'
    }
  }
}

export default HomePage
