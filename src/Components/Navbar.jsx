import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">DigiPreak</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav  ms-auto me-5">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" href="#">Graphics Design</Link></li>
                                    <li><Link className="dropdown-item" href="#">Web Development</Link></li>
                                    <li><Link className="dropdown-item" href="#">Search Engine Optmization</Link></li>
                                    <li><Link className="dropdown-item" href="#">Social Media Managemat & Merketing</Link></li>
                                    <li><Link className="dropdown-item" href="#">Email Merketing</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Contacts</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
