import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/layout'
import { FormControl } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'


export const Header = () => {
    return (
        <Box>
            <Box>
                <Link to="/">VideoTube</Link>
            </ Box>
            
            <FormControl id="search">
                <Input type="text" placeholder="入力" />
                <Button type="submit">検索</Button>
            </FormControl>
        </Box>
    )
}
