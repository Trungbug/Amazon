import React, { Component } from "react";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import AdvertisementFour from "./AdvwertisementFour/AdvertisementFour";
import "./MainPage.css";
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            < div className="mainpage">

                <div style={{ paddingTop: "260px", display: "flex", flexWrap: "wrap" }}>
                    <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementOne />
                </div>
            </div >
        );
    }
}
export default MainPage;