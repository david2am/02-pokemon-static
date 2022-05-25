import { CSSProperties } from "react"

import Image from "next/image"
import NextLink from "next/link"

import { Link, Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {
    const { theme } = useTheme()

    const styles: CSSProperties = {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 35px 0 15px',
        backgroundColor: theme?.colors.gray900.value
    }

    return (
        <nav style={styles}>
            <Image
                alt="Icono de la app"
                width="70px"
                height="70px"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            />
            <NextLink href="/" passHref>
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>ókemon!</Text>
                </Link>
            </NextLink>
            <Spacer css={{flex: 1}} />
            <NextLink href="/favorites" passHref>
                <Link>
                    <Text color="white" h3>Favoritos</Text>
                </Link>
            </NextLink>
        </nav>
    )
}
