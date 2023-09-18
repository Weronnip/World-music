import { Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
    return(
        <>
            <div className="sidebar">
                <div className="wrapper">
                    <div className="name-site">World Music</div>
                    <ul className="nav-list">
                        <li><a href="#" className='mini-bth'>Top charts</a></li>
                        <li><a href="#" className='mini-bth'>Library</a></li>
                        <li><a href="#" className='mini-bth'>Playlists</a></li>
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