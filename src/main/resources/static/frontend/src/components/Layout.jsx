import { Outlet } from 'react-router-dom'
import './css/Layout.css'

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
                    </ul>
                    <div className="form">
                        <button className='button'>Profile</button>
                    </div>
                </div>
            </div>

            <Outlet />

        </>
    );
}

export {Layout}