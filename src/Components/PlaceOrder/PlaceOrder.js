import "./Placeorder.css";
import React from 'react'
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
function PlaceOrder(props) {
    return (
        <div>
            <Grid container>
                <Grid item xs={6} >
                    <img src='https://ik.imagekit.io/BanHang1234/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1724489771000' className="placeorder__image" />
                </Grid>
                <Grid item xs={3} >
                    <div className="placeorder__description">
                        <div style={{ fontSize: "24px", lineHeight: "32px", fontWeight: 500 }}>
                            Iphone 15 pro max
                        </div>
                        <div> <Rating name="read-only" value="3" readOnly style={{ fontSize: "20px" }} />
                            350000 rating
                        </div>
                        <hr></hr>
                        <div>
                            <div className="textgap">Price :<span className="pricetag">$50000</span></div>
                            <div className="textgap">FREE delivery: :<strong>GHN</strong></div>
                            <div className="textgap">EMI starts at :<strong>$50000</strong> . No Cost EMI available</div>
                            <div className="textgap">Sold by <strong>Amazon.com</strong> and Fulfilled by Amazon.</div>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={3} >
                    <Paper variant="outlined" className="placeorder__order">
                        <button className="placeorder__button addtocart">Add to cart</button>
                        <button className="placeorder__button buynow">Buy now</button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default PlaceOrder;
