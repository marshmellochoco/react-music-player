import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiHome, mdiMagnify, mdiMusicBoxMultiple } from "@mdi/js";
import logo from "../images/music-choco.png";

const Navbar = ({ resetToken }) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/" className="w-min" title="music-choco">
                    <img src={logo} alt="music-chcoo" />
                </Link>
            </div>
            <div className="nav-items">
                <Link to="/" className="nav-item">
                    <Icon path={mdiHome} className="sm:hidden" title="Home" />
                    <span className="hidden sm:block">Home</span>
                </Link>
                <Link to="/library" className="nav-item">
                    <Icon
                        path={mdiMusicBoxMultiple}
                        className="sm:hidden"
                        title="Library"
                    />
                    <span className="hidden sm:block">Library</span>
                </Link>
                <Link to="/search" className="nav-item">
                    <Icon
                        path={mdiMagnify}
                        className="sm:hidden"
                        title="Search"
                    />
                    <span className="hidden sm:block">Search</span>
                </Link>
            </div>
            <div className="nav-user" onClick={resetToken}>
                MarshChoco
            </div>
        </nav>
    );
};

export default Navbar;
