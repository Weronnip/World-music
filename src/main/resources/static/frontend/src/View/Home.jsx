import './css/home.css'
import { IconName, BiSolidPlaylist } from "react-icons/bi/index";


function Home() {
    return(
        <div className="section">
            <div className="header">
                <ul className="nav-list">
                    <li><a href="#openModal" className='openModal' title='playlist'><BiSolidPlaylist /> </a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
            <div className="wrappers">
                <div className="playlist">
                    <div className="modal" id='openModal'>
                        <div className="modal_dialog">
                            <div className="modal_content">
                                <div className="model_header">
                                    <div className="name-block">One playlist 
                                    <a href="#close" title='Close' className='close'>x</a>
                                    </div>
                                </div>
                                <div className="modal_body">
                                    <div className="track-list">
                                        <div className="information-track">
                                            <div className="name-track">Name Track</div>
                                            <div className="artist-track">Track Atrist</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Home}