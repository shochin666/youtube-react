import { Img } from '@chakra-ui/image'
import { Box, Link, Text } from '@chakra-ui/layout'
import React from 'react'

export const VideoGridItem = ({ id, src, title }) => {
    const url = `watch?v=${id}`
    return (
        <Link href={url} width="100%">
            <Box>
                <Img src={ src } alt={ title } width="100%" />
                <Text>{ title }</Text>
            </Box>
        </Link>
    )
}
