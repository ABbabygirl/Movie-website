import React from 'react'

function Navbar() {
  return (
   
    <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
    >
     
        <div className="container justify-content-evenly  ">
            <a className="navbar-brand" href="#">Logo</a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">

                <ul className="navbar-nav me-auto mt-2 mt-lg-0 fs-4">

                    <li className="nav-item">
                            <a className="nav-link active" href="#" aria-current="page">About
                            <span className="visually-hidden">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page">Login
                        <span className="visually-hidden">(current)</span></a>
                        
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page">SignUp
                        <span className="visually-hidden">(current)</span></a>
                        
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Dropdown</a
                        > */}
                        {/* <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownId"
                        >
                            <a className="dropdown-item" href="#"
                                >Action 1</a
                            >
                            <a className="dropdown-item" href="#"
                                >Action 2</a
                            >
                        </div> */}
                    {/* </li> */}
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    {/* <input
                        className="form-control me-sm-2"
                        type="text"
                        placeholder="Search"
                    /> */}
                    <button
                        className="btn btn-outline-secondary my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
    
    
  )
}

export default Navbar