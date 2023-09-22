import { AiOutlineClose } from 'react-icons/ai/index';
import { iconsName } from 'react-icons/bi/index';
import './css/profile.css';


function Profile() {
    let username = "Your name"
    let playnow = "Now playing: To Rider";
    return(
        <div className="section">
            <div className="profile-content">
                <div className="info-user">
                    <img src="https://sun7-19.userapi.com/impg/yiswPQIDa3ulfs5BzOKEZiOT-8by6cbdF_Jy6w/X-Gz_h3Dh4U.jpg?size=504x505&quality=95&sign=a6814ef9157484d36908adb0907140e3&type=album" 
                    alt="user_avatar" className='photo-user'/>
                    <div className="name-user">{username}</div>
                    <div className="block-now">{playnow}</div>
                    <div className="library-content">
                        <div className="playlist-content">
                            Name playlist
                        </div>
                        <div className="playlist-content">
                            Second playlist
                        </div>
                    </div> 
                </div>        
            </div>
        </div>
    );
};

export {Profile}