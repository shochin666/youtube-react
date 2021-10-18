import { Box } from '@chakra-ui/layout'
import React from 'react'
import { Header } from '../Header/Header'

export const Layout = ({ children }) => {
    return (
        <Box>
            <Header />
            { children }
        </Box>
    )
}
