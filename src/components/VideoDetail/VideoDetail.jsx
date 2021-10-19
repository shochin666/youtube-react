import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router'
import { fetchSelectedData } from '../../apis'
import { Store } from '../../store/index'

export const VideoDetail = () => {
    // eslint-disable-next-line no-unused-vars
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
    }, [])

    return (
        <div>
            
        </div>
    )
}
