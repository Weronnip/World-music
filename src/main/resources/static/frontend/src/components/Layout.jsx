import { Outlet } from 'react-router-dom'
import './css/Layout.css'
import './JavaScript/script'

function Layout() {
    return(
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <i className='bx bxs-music icon'></i>
                    <div className="logo_name">World Music</div>
                    <i className='bx bx-menu' id="btn" ></i>    
                    </div>
            
                <ul className="nav-list">
                    <li>
                        <i className='bx bx-search' ></i>
                        <input type="text" placeholder="Search..."/>
                        <span className="tooltip">Music Search</span>
                    </li>
                    
                    <br />
            
                    <li>
                    <a href="/About">
                        <i className='bx bx-info-circle'></i>
                        <span className="links_name">About</span>
                    </a>
                    <span className="tooltip">About</span>
                    </li>
            
                    <li>
                    <a href="/Contact">
                        <i className="bx bxs-contact"></i>
                        <span className="links_name">Contact</span>
                    </a>
                    <span className="tooltip">Contact</span>
                    </li>
            
                    <li>
                    <a href="/videoclips">
                        <i className='bx bxs-videos'></i>
                        <span className="links_name">Video Clips</span>
                    </a>
                    <span className="tooltip">Video Clips</span>
                    </li>
            
                    <li>
                    <a href="#rec-track">
                        <i className='bx bx-like'></i>
                        <span className="links_name">Recommendations</span>
                    </a>
                    <span className="tooltip">Recommendations</span>
                    </li>
            
                    <li className="log">
                    <div className="log-ins">
                        <a href="/login">
                            <i className='bx bx-log-in'></i>
                            <span className="links_name">Login</span>
                        </a>
                        <span className="tooltip">Login</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="section">
                
            </div>
            
            <Outlet />

        </>
    );
}

export {Layout}