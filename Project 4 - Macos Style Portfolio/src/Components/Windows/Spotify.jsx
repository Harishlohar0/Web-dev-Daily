import React from 'react'
import Window from './Window'
import "./spotify.scss"
const Spotify = () => {
    return (
        <div>
            <Window name={"spotify"} width='30vw'>
                <div className="spotify-window">
                    <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/39yEFHNrv2IzDHxo7XaXi6?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </Window>
        </div>
    )
}

export default Spotify