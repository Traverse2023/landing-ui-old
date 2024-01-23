import {useCallback, useEffect, useState} from "react";

const Logo = () => {
    return (
        <img src="/img/logo.png"/>
    )
}

const NavBar = () => {
    const [colorChange, setColorchange] = useState(false);
    const handleScroll = () => {
        console.log("scrolling")}
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });


    return (
        <header className={colorChange ? "colorChange" : ""}>
            <div className="header-container">
                <Logo />
                <ul className="nav-opts">
                    <li className="nav-opt nav-item dropdown"><a className="nav-link">Home</a></li>
                    <li className="nav-opt nav-item dropdown"><a className="nav-link">Features</a></li>
                    <li className="nav-opt nav-item dropdown"><a className="nav-link">About</a></li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar