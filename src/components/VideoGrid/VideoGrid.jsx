import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/react'

export const VideoGrid = ({ children }) => {
    return (
        <>
            <Box margin={4} py={10}  display={['none', 'none', 'block']}>
                <Grid templateColumns="repeat(4, 1fr)" gap={5}>
                    { children }
                </Grid>
            </Box>
            <Box margin={4} py={10}  display={['block', 'block', 'none']}>
                <Grid templateColumns="repeat(1, 1fr)" gap={5}>
                    { children }
                </Grid>
            </Box>
        </>
    )
}
