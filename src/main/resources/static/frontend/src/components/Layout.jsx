import { Outlet } from 'react-router-dom'
import { BiLike, BiHomeAlt2, BiLibrary, BiSolidPlaylist, BiMusic } from 'react-icons/bi/index'
import './Layout.css'

function Layout() {
    return(
        <>
            <div className="sidebar">
                <div className="wrapper">
                    <div className="name-site">World Music</div>
                    <ul className="nav-list">
                        <li><a href="/home" className='mini-bth'><BiHomeAlt2 className='icon'/>Home</a></li>
                        <li><a href="/charts" className='mini-bth'><BiLike className='icon' />Top charts</a></li>
                        <li><a href="/library" className='mini-bth'><BiLibrary className='icon'/>Library</a></li>
                        <li><a href="/playlist" className='mini-bth'><BiSolidPlaylist className='icon'/>Playlists</a></li>
                        <div className="form">
                            <button className='button'>Profile</button>
                        </div>
                    </ul>
                </div>
            </div>

            <Outlet />

        </>
    );
}

export {Layout}