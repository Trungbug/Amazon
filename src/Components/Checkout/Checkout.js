import React from "react";
import "./Checkout.css";
import Grid from '@mui/material/Grid';
import CheckoutItem from "./CheckoutItem";
function Checkout(props) {
    return <div className="checkout_body">
        <Grid container>
            <Grid item xs={10}>
                <div style={{ fontSize: "30px", fontWeight: "500", padding: "20px 0px 0px 20px" }}>shopping cart</div>
                <div>
                    <CheckoutItem />
                    <CheckoutItem />
                    <CheckoutItem />
                </div>
            </Grid>
            <Grid item xs={2}>
                <div style={{ width: "300px", height: "200px", padding: "20px", marginTop: "25px", backgroundColor: "white" }}>
                    <div style={{ fontSize: "26px" }}>Subtotal : <strong> $ 1000</strong></div>
                    <div style={{ paddingTop: "25px " }}>
                        <button className="placeorder__button" >Proceed to Buy</button>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>;
}

export default Checkout;
