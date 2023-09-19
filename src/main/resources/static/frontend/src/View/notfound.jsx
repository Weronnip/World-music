import './css/notfound.css'

function Notfound() {
    return(

        <div className="error-page">
            <p className='text-error'>This page notfound, go back to the <a href="/home" className='link-error'>Home page</a></p>
        </div>
    );
}

export { Notfound }