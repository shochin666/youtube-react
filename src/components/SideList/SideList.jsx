import React, { useEffect, useContext } from 'react'
import { Store } from '../../store/index'  
import { fetchRelatedData } from '../../apis/index' 
import { Box, Text } from '@chakra-ui/layout'   
import { SideListItem } from '../SideListItem/SideListItem'

export const SideList = () => {
    const { globalState, setGlobalState } = useContext(Store)
    const setRelatedVideo = async(id) => {
        await fetchRelatedData(id).then((res) => {
            setGlobalState({type: 'SET_RELATED', payload: {related: res.data.items}})
        })
    }
    useEffect(() => {
        setRelatedVideo(globalState.selected.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalState.selected])
    return (
        <Box>
            {
                globalState.related ? globalState.related.map((video) => {
            
                    return (
                        <SideListItem
                            id={video.id.videoId}
                            key={video.id.videoId}
                            src={video.snippet.thumbnails.medium.url}
                            title={video.snippet.title}
                        />
                    )
                }) : <Text>NO DATA</Text>
            }        
        </Box>
    )


}
