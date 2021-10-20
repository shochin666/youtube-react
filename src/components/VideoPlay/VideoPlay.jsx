import { Box } from '@chakra-ui/layout'
import React from 'react'
import Youtube from 'react-youtube'

export const VideoPlay = ({id}) => {
    return (
        <Box>
            <Youtube videoId={id}/>
        </Box>
    )
}
