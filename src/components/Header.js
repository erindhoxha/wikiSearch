import React, { useState, useEffect } from "react";
import Link from "./Link";

const Header = (props) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', onLocationChange)
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className={currentPath == "/" ? 'active' : ''}>
                Accordion
            </Link>
            <Link to="/dropdown" className={currentPath == "/dropdown" ? 'active' : ''}>
                Dropdown
            </Link>
            <Link to="/search" className={currentPath == "/search" ? 'active' : ''}>
                Search
            </Link>
            <Link to="/translate" className={currentPath == "/translate" ? 'active' : ''}>
                Translate
            </Link>
           
        </div>
    )
}

export default Header;