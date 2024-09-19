import React, { Component } from "react";
import "./NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            < div className="navbar_component" >

                <div className="navbar_logo"></div>
                <div className="navbar_locator">
                    <div className="navbar_locatorImages"></div>
                    <div className="navbar_location">VietNam</div>
                </div>
                <div className="navbar_searchcomponet">
                    <div>
                    </div>
                    <div><input type="text" className="navbar_searchbox"></input></div>
                    <div className="navbar_searchboxdiv">
                        <div className="navbar_searchicon"></div>
                    </div>
                </div>
            </div >
        );
    }
}
export default NavBar;