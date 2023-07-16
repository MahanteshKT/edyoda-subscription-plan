import React, {  useRef } from 'react'
import classes from "./RadioField.module.css";
const RadioField = (props) => {
    const RadioRef=useRef();

    const OnChangeHandler=()=>{
        props.sendAmount(props.total)
    }


    return (
    <label htmlFor={props.id} className={classes['text-field']} >
        
            <input  id={props.id} type='radio' name="radio" value={props.total}
                    ref={RadioRef}
                    className={`${classes.input} ${classes.red}   ${(RadioRef.current?.checked)  && classes.disable}` } 
                    disabled={props.disabled}
                    onChange={OnChangeHandler}
                    checked={props.id==="radio1"}
                    
            />
            {
            RadioRef.current?.checked &&<svg xmlns="http://www.w3.org/2000/svg" className={classes['tick-mark']}  width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path d="M14.1333 22.6334L23.5333 13.2334L21.6667 11.3667L14.1333 18.9001L10.3333 15.1001L8.46667 16.9667L14.1333 22.6334ZM16 29.8334C14.1556 29.8334 12.4222 29.4832 10.8 28.7827C9.17778 28.0832 7.76667 27.1334 6.56667 25.9334C5.36667 24.7334 4.41689 23.3223 3.71733 21.7001C3.01689 20.0779 2.66667 18.3445 2.66667 16.5001C2.66667 14.6556 3.01689 12.9223 3.71733 11.3001C4.41689 9.67786 5.36667 8.26675 6.56667 7.06675C7.76667 5.86675 9.17778 4.91653 10.8 4.21608C12.4222 3.51653 14.1556 3.16675 16 3.16675C17.8444 3.16675 19.5778 3.51653 21.2 4.21608C22.8222 4.91653 24.2333 5.86675 25.4333 7.06675C26.6333 8.26675 27.5831 9.67786 28.2827 11.3001C28.9831 12.9223 29.3333 14.6556 29.3333 16.5001C29.3333 18.3445 28.9831 20.0779 28.2827 21.7001C27.5831 23.3223 26.6333 24.7334 25.4333 25.9334C24.2333 27.1334 22.8222 28.0832 21.2 28.7827C19.5778 29.4832 17.8444 29.8334 16 29.8334Z" fill="#47BA68"/>
            </svg>  
            }

        <div className={classes['subdetails']}>
        <div className={classes.Months} 
                style={props.Expired?{}:{color:"#3C4852"}}>
            
            {props.months} Months Subscription
        </div>
        <div className={classes.Amount} 
                style={props.Expired?{}:{color:"#3C4852"}}>
            <span>Total <strong>₹{props.total}</strong></span>
            <span><b>₹{props.amountPerMon}</b> <b style={{fontSize:0.7+'rem',float:"right",color:'#BEBEBE'}}>  /mo</b></span>
        </div>
        </div>
    {
        props.recomanded &&
        <div className={classes["div-wrapper"]}>
            <div className={`${classes["text-wrapper-4"]} ${classes["green"]} `}>Recommended</div>
        </div>
    }
    {
        props.Expired && 
        <div className={classes["div-wrapper"]}>
            <div className={`${classes["text-wrapper-4"]} ${classes.red}`}>Offer expired</div>
        </div>
    }

    
                

    </label>
  )
}

export default RadioField
