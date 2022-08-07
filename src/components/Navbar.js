import {Link} from "react-router-dom"
//import logo from "./logo.svg"

export default function Navbar() {
    return(
        <nav className="navbar navbar-dark navbar-expand-md">
        <div className="container-fluid">
            <div className="navbar-header">
                {/*<img src={logo} class="navbar-logo" alt="logo" />*/}
                <span className="navbar-brand h1 text-white">
                Andrew Mitchell
                </span>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsible-navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsible-navbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                    {/*<li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">Projects</Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/project-horizon">Project: Horizon</Link>
                            <Link className="dropdown-item" to="/capture-the-flag">Capture the Flag</Link>
                            <Link className="dropdown-item" to="/sudoku-solver">Sudoku Solver</Link>
                            <Link className="dropdown-item" to="/plexus-effect">Plexus Effect</Link>
                        </div>
                    </li>
                     */}
                </ul>
                <ul className="nav navbar-nav ms-md-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/AndrewMitchell25" target="blank" aria-label="GitHub">
                            <i className="bi bi-github nav-icon"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.linkedin.com/in/andrew-mitchell-572710225/" target="blank" aria-label="LinkedIn">
                          <i className="bi bi-linkedin nav-icon"></i>
                      </a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}