import './css/home.css'
import { BiSolidPlaylist } from "react-icons/bi/index";
import { AiOutlineClose, AiOutlineTrophy, AiOutlineCustomerService } from 'react-icons/ai/index'


function Home() {
    return(
        <div className="section">
            <div className="header">
                <ul className="navigation-list">
                    <li><a href="#openModal" className='head-bth' title='playlist'><BiSolidPlaylist /></a></li>
                    <li><a href="#top-chart" className='head-bth' title='top Charts'><AiOutlineTrophy /></a></li>
                    <li><a href="#mix" className='head-bth' title='mix track'><AiOutlineCustomerService /></a></li>
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
                                    <a href="#close" title='Close' className='close'><AiOutlineClose className='icon' /></a>
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