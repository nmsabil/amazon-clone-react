import React from "react";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://m.media-amazon.com/images/G/02/UK_CBCC_PLAT/DP/10GC_Plat_DPbanner._CB1198675309_.png'
          alt='ad'
        />

        <div>
          <h2 className='checkout__title'>Your shopping Basket</h2>
          {/* basket items */}
          {/* basket items */}
          {/* basket items */}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
