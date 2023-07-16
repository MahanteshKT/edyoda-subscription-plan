import React, { useState } from 'react'
import classes from "./CourseForm.module.css"
import RadioField from '../../../components/UI/RadioField/RadioField'
const CourseForm = () => {
    const [totalAmount,setTotalAmount]=useState("179");
    const [offerPrice,setofferPrice]=useState("18,321");
    const TotalAmountHandler=(totalPrice)=>{
        setTotalAmount(totalPrice);
        setofferPrice(18500 - (+totalPrice))
    }
    return (
    <div className={classes["form"]}>
            <div className={classes["progress-bar"]}>
              <div className={classes["stage"]}>
                <div className={classes["icon"]}>
                  <div className={classes["text-wrapper-2"]}>1</div>
                </div>
                <div className={classes["text-4"]}>Sign Up</div>
              </div>
              <div className={classes["stage"]}>
                <div className={classes["icon"]}>
                  <div className={classes["text-wrapper-2"]}>2</div>
                </div>
                <div className={classes["text-4"]}>Subscribe</div>
              </div>
            </div>
            <div className={classes["form-header"]}>
              <div className={classes["text-5"]}>Select your subcription plan</div>
            </div>
            <div className={classes["input-container"]}>
              
              <RadioField z
                    recomanded={false} 
                    Expired={true}
                    clicked={false}
                    disabled={true}
                    months="12"
                    total="99"
                    amountPerMon="8"
                    sendAmount={TotalAmountHandler}
                />
              <RadioField 
                    recomanded={true} 
                    Expired={false}
                    months="12"
                    total="179"
                    amountPerMon="15"
                    checked={true}
                    sendAmount={TotalAmountHandler}
                    
                />

                <RadioField 
                    recomanded={false} 
                    Expired={false}
                    months="6"
                    total="149"
                    amountPerMon="25"
                    sendAmount={TotalAmountHandler}

                />

                <RadioField 
                    recomanded={false} 
                    Expired={false}
                    months="3"
                    total="99"
                    amountPerMon="33"
                    sendAmount={TotalAmountHandler}

                />
              
              
              
            </div>
            <div className={classes["summary-container"]}>
              <div className={classes["div-5"]}>
                <div className={classes["left-text"]}>Subscription Fee</div>
                <div className={classes["text-15"]}>₹18,500</div>
              </div>
              <div className={classes["alert"]}>
                <div className={classes["div-5"]}>
                  <div className={classes["text-16"]}>Limited time offer</div>
                  <div className={classes["text-17"]}>- ₹{offerPrice}</div>
                </div>
                <div className={classes["alert-body"]}>
                  <img
                    className={classes["img"]}
                    alt="Icon clock"
                    src="https://generation-sessions.s3.amazonaws.com/8cdef5d0e8f75dbe09d3055dcd9a6e6e/img/icon-clock.svg"
                  />
                  <p className={classes["p"]}>Offer valid till 25th March 2023</p>
                </div>
              </div>
              <div className={classes["div-5"]}>
                <p className={classes["left-text"]}>
                  <span className={classes["span"]}>Total </span>
                  <span className={classes["text-wrapper-5"]}>(Incl. of 18% GST)</span>
                </p>
                <div className={classes["right-text"]}>₹{totalAmount}</div>
              </div>
            </div>
            <div className={classes["button-container"]}>
              <button type="submit" className={classes["secondary-button"]}>CANCEL</button>
              <button type="submit" className={classes["primary-button-2"]}>PROCEED TO PAY</button>
            </div>
            <div className={classes["icon-container"]}>
              <div className={classes["razorpay-icon"]} />
            </div>
          </div>
  )
}

export default CourseForm
