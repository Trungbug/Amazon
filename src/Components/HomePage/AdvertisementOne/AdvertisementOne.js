import React from "react";
import "./AdvertisementOne.css";
function AdvertisementOne(props) {
    return (
        <div className="AdvertisementOne_main">
            <div className="AdvertisementOne_header">
                up to 50% off
            </div>
            <div className="AdvertisementOne_body">
                <img src="https://ik.imagekit.io/BanHang1234/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1724489768260" width="300px"></img>
            </div>
            <div className="AdvertisementOne_footer">
                see more
            </div>
        </div>
    );
}

export default AdvertisementOne;