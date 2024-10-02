import React, { useState, useEffect } from 'react'
import "./RightSide.css";
import Product from './Product';
const RightSidePanel = () => {
    const [listOfProduct, setListOfProducts] = useState([]);
    useEffect(() => {
        let list = [
            //tạo api
            { name: "Iphone10", rating: "34565", price: "4534", image: "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583" },
            { name: "Iphone11", rating: "656", price: "76543456", image: "https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388" },
            { name: "Iphone12", rating: "8754", price: "76543", image: "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578" },
            { name: "Iphone13", rating: "344574367565", price: "637357", image: "https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461" },
            { name: "Iphone12", rating: "8754", price: "76543", image: "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578" },
            { name: "Iphone13", rating: "344574367565", price: "637357", image: "https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461" }

        ]

        setListOfProducts(list);
    }, []);

    return (<div className="RightSide__main">
        {/* <Product rating='1234' name='iphone' price='1234' image='https://ik.imagekit.io/BanHang1234/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1724489771000' />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */} {
            listOfProduct.map((item) => (

                <Product definition={item} />

            ))
        }
    </div>
    )
}

export default RightSidePanel