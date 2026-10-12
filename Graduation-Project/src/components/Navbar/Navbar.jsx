import React from 'react' 
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    function handleSearch(e) {
    e.preventDefault();
    navigate(`/countries?search=${term}`);
}

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to={'/'}><img src="/atlas-logo-teal.svg" alt="Atlas Logo" /></NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={`/`}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={`/countries`}>Countries</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={`/contact`}>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={`/about`}>About</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0" onSubmit={handleSearch}>
                            <input className="form-control me-sm-2" type="text" placeholder="Search..." value={term} onChange={(e) => setTerm(e.target.value)} />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}
