import { AiOutlineClose } from 'react-icons/ai/index';
import { iconsName } from 'react-icons/bi/index';

import './css/library.css';

function Library() {
    return(
        <div className="section">
            <div className="content-list">
                Your Library
                <div className="list-track">
                <div className="track">
                    <div className="track-info">
                        <div className="track-name">Name track</div>
                        <div className="artist-name">Artist track</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export { Library }