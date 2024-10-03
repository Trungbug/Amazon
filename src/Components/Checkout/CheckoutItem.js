import React from "react";
import "./Checkout.css";
function CheckoutItem(props) {
    return <div className="checkout_item">
        <div style={{ border: "1px solid #E7E7E7", width: "95%", display: "flex", height: "250px", margin: "25px" }}>
            <div style={{ margin: "25px" }}>
                <img src="https://ik.imagekit.io/BanHang1234/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65_.webp?updatedAt=1724489770796" height="200px" />
            </div>
            <div style={{ marginTop: "20px" }}>
                <div style={{ fontSize: "20px" }} className="textgap">Iphone 15 pro max</div>
                <div style={{ fontWeight: "bold" }} className="textgap">$ 1000</div>
                <div className="textgap">On Sale</div>
            </div>
        </div>;
    </div>
}

export default CheckoutItem;

