import React from 'react'
import { Link } from 'react-router-dom'



const navBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link to='/'>
                    <img src='/Carrito.png' width='40' className= 'd-flex p-2'/>
                </Link>
               
            </nav>
        </div>
        
    )
    
}


export default navBar
