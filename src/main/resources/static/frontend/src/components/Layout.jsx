import { Outlet } from 'react-router-dom'
import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'

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
                <div className="player">
                    <div className="details">
                        <div className="track-name">Track Name</div>
                        <div className="track-artist">Track Artist</div>
                    </div>
         
                    <div className="slider_container">
                        <div className="current-time">00:00</div>
                         <input type="range" min="1" max="100" value="0" className="seek_slider" onChange="seekTo()" />
                         <div className="total-duration">00:00</div>
                    </div>
         
                    <div className="slider_volume_container">
                        <i className="bx bx-volume-low"></i>
                         <input type="range" min="1" max="100" value="99" className="volume_slider" onChange="setVolume()" />
                         <i className="bx bx-volume-full"></i>
                    </div>
         
                    <div className="buttons">
                        <div className="random-track" onClick="randomTrack()">
                            <i className="bx bx-shuffle"></i>
                        </div>
                        <div className="prev-track" onClick="prevTrack()">
                             <i className="bx bx-left-arrow-circle"></i>
                         </div>
                         <div className="playpause-track" onClick="playpauseTrack()">
                             <i className="bx bx-play-circle"></i>
                         </div>
                         <div className="next-track" onClick="nextTrack()">
                             <i className="bx bx-right-arrow-circle"></i>
                         </div>
                         <div className="repeat-track" onClick="repeatTrack()">
                             <i className="bx bx-repeat"></i>
                         </div>
                    </div>      
                </div>
            </div>

            <script src="../static/JavaScript/script.js" />
            <script src="../static/JavaScript/player.js" />
            
            <Outlet />

        </>
    );
}

export {Layout}