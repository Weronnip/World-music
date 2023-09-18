import './css/home.css'

function Home() {
    return(

        <div className="section">
            <div className="wrappers">
                <div className="playlist">
                    <div className="name-block">One playlist</div>
                    <div className="track-list">
                        <div className="information-track">
                            <div className="name-track">Name Track</div>
                            <div className="artist-track">Track Atrist</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Home}