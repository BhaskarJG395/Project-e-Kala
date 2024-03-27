import React from 'react'
import ArtistBook from './ArtistBook'
import UserBook from './UserBook'
import ArtShowcase from './ArtShowcase'
import { useLogin } from '../LoginContext'
export default function HeadingAbout(){
    const {isLoggedIn, login, logout}=useLogin();
    return(
        <div>        
            <div>
                <ArtistBook></ArtistBook>
                {
                    isLoggedIn ? (<></>) : (<UserBook></UserBook>)
                }
                <ArtShowcase></ArtShowcase>
                <p>About this page will be here.</p>
            </div>
        </div>

    )
}