import { iconName } from 'react-icons/ai/index';
import { iconsName } from 'react-icons/bi/index';

import './css/profile.css';

function Profile() {
    return(
        <div className="section">
            <div className="profile-content">
                <div className="info-user">
                    <img src="https://sun7-19.userapi.com/impg/yiswPQIDa3ulfs5BzOKEZiOT-8by6cbdF_Jy6w/X-Gz_h3Dh4U.jpg?size=504x505&quality=95&sign=a6814ef9157484d36908adb0907140e3&type=album" 
                    alt="user_avatar" className='photo-user'/>
                    <div className="name-user">Afton Weron</div>
                    <div className="block-now">Now playing: To Rider</div>
                    <div className="library-content">
                        <div className="playlist-content">
                            Name playlist
                        </div>
                    </div> 
                </div>        
            </div>
        </div>
    );
};

export {Profile}