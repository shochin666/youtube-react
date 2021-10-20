import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router'
import { fetchSelectedData } from '../../apis'
import { Store } from '../../store/index'
import { VideoPlay } from '../VideoPlay/VideoPlay'
import { Box, Center, Text } from '@chakra-ui/layout'
import Linkify from 'react-linkify'


export const VideoDetail = () => {
    const {globalState, setGlobalState} = useContext(Store)
    const location = useLocation()
    const setSelectedVideo = async() => {
        const searchParams = new URLSearchParams(location.search)
        const id = searchParams.get('v')
        await fetchSelectedData(id).then((res) => {
            const item = res.data.items.shift()
            setGlobalState({ type: 'SET_SELECTED', payload: {selected: item} })
        })
    }


    useEffect(() => {
        setSelectedVideo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search])

    return globalState.selected && globalState.selected.id ? (
        <Box mx={[5, 10, 50, 120, 200]} pt={20}>
            <Box>
                {/* 動画のサイズがレスポンシブに対応しなかった */}
                <VideoPlay id={globalState.selected.id}  width="100%" />
                <Text fontSize={[5, 10, 20]} my={5}>{globalState.selected.snippet.title}</Text>
            </Box>

            <Box mb={5}><hr/></Box>
            <Linkify>
                <Box>
                    <Text fontSize={[5, 10, 20]} whiteSpace="pre-wrap">{globalState.selected.snippet.description}</Text>
                </Box>
            </Linkify>
        </Box>
    ) : (<Box width="100vh"><Center><Text mt={48}>NO DATA</Text></Center></Box>)
}
