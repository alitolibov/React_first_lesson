import React from "react";
import "../App.scss"

const Header = () => {
    return ( 
        <header>
            <div className="container">
                <div className="header">
                    <p className="luxe">Luxe Quality</p>
                    <div className="headerRight">
                        <p className="header-btn">HOME</p>
                        <p className="header-btn">ABOUT US</p>
                        <p className="header-btn">EXPERSITE</p>
                        <p className="header-btn">SERVICES</p>
                        <p className="header-btn">CASES</p>
                        <button className="btn-gradient">CONTACT US</button>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;