import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/layout'
import { FormControl } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { Text } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

export const Header = () => {
    return (
        <Box pos="fixed" left="0" top="0" display="flex" height="10" width="100%" backgroundColor="gray.700">
            <Box mt={2} mx={2} flex="1">
                <Link to="/"><Text color="white">VideoTube</Text></Link>
            </Box>
            
            <FormControl id="search" display="flex" flex="2">
                <Input type="text" placeholder="検索" width="50%" mt={1} height={8} backgroundColor="white" />
                <Button type="submit" backgroundColor="blackAlpha.600" width={20} mt={1} height={8}><SearchIcon color="white" /></Button>                
            </FormControl>
        </Box>
    )
}
