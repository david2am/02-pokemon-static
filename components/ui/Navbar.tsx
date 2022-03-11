import { CSSProperties } from "react"

import Image from "next/image"
import { Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {
    const { theme } = useTheme()

    const styles: CSSProperties = {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 20px',
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
            <Text color="white" h2>P</Text>
            <Text color="white" h3>ókemon</Text>
            <Spacer css={{flex: 1}} />
            <Text color="white" h3>Favoritos</Text>
        </nav>
    )
}
