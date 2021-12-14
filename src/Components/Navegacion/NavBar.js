import React from 'react'
import { Link } from 'react-router-dom'



const navBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link to='/'>
                    <img src='/Logo.png' width='70'/>
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <Link className="nav-link" to='/'>Inicio</Link>
                            <Link className="nav-link" to='/Items'>Items</Link>
                        </div>
                    </div>
                </div>

                <Link to='/'>
                    <img src='/Carrito.png' width='40' className= 'd-flex p-2'/>
                </Link>
            </nav>
        </div>
        
    )
    
}


export default navBar
