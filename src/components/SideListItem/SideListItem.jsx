import { Link, Box, Text } from '@chakra-ui/layout'
import React from 'react'
import { Img } from '@chakra-ui/image'

export const SideListItem = ({id, src, title}) => {
    const url = `/watch?v=${id}`
    return (
        <Link href={url}>
            <Img src={src} alt={title} />
            <Box>
                <Text>{title}</Text>
            </Box>
        </Link>
    )
}
