import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <div>
            <div>
                <Link to="/">VideoTube</Link>
            </div>
            
            <form>
                <input type="text" placeholder="検索" />
                <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    )
}
