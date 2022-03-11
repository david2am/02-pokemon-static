import { FC } from "react"

import Head from "next/head"

import { Navbar } from '../ui';

interface Props {
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="David De Vargas" />
            <meta name="description" content={`Pokemon desc ${title}`} />
            <meta name="keywords" content={`${title}, Pokemon, pokedex`} />
        </Head>

        <Navbar />

        <main style={{padding: '0 20px'}}>
            {children}
        </main>
    </>
  )
}
