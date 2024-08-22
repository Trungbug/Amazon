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
            </div >
        );
    }
}
export default NavBar;