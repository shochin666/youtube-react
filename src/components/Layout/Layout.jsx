import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import { Header } from '../Header/Header'

export const Layout = ({ children }) => {
    return (
        <Box minHeight="100vh" backgroundColor="black">
            <Flex>
                <Header/>
                <Box backgroundColor="white">
                    <Flex>{ children }</Flex>
                </Box>
            </Flex>
        </Box>
    )
}
