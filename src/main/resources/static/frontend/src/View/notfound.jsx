import './css/notfound.css'

function Notfound() {
    return(

        <div className="error-page">
            <p className='text-error'>This page notfound, back page <a href="/home" className='link-error'>Home</a></p>
        </div>
    );
}

export { Notfound }