import React from "react"

export default function Navbar(){
    return(
        <nav className="navbar bg-primary">
            <div className="container-fluid">
                <h2 className="navbar-brand" href="#">{`GUNNER`}</h2>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link text-link" href="#">{'SOURCES'}</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input type="search" className="form-control" placeholder="search here .."></input>
                    <button type="submit" className="btn-success ms-1">{'SEARCH'}</button>
                </form>
            </div>
        </nav>
    )
}
