import React from 'react'
import classes from "./CourseDetails.module.css"
const CourseDetails = () => {
  return (
    <div className={classes["main-lockup"]}>
            <header className={classes["header"]}>
              <span>Access curated courses worth</span>
                <span><b style={{fontSize:4+'rem'}}>₹ </b>
                    <span className={classes.amount}>18,500</span> 
                    at just <span className={classes.blue}>₹ 99</span> per year!
                </span>
            </header>
            <ul>
            
            <li className={classes["pointer"]}>
              <img
                className={classes["icon-2"]}
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/8cdef5d0e8f75dbe09d3055dcd9a6e6e/img/icon-2.svg"
              />
              <div className={classes["div-wrapper-2"]}>
                <b className={classes['blue']} >100+</b> Job relevant courses
              </div>
            </li>
            <li className={classes.pointer}>
              <img
                className={classes["icon-2"]}
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/8cdef5d0e8f75dbe09d3055dcd9a6e6e/img/icon-1.svg"
              />
              <div className={classes["div-wrapper-2"]}>
              <b className={classes['blue']} >20,000+</b> Hours of content
              </div>
            </li>
            <li className={classes["pointer"]}>
              <div className={classes["group-wrapper"]}>
                <div className={classes["group"]}>
                  <div className={classes["overlap-group-2"]}>
                    <div className={classes["text-wrapper-12"]}>live</div>
                  </div>
                </div>
              </div>
              <div className={classes["div-wrapper-2"]}>
              <b className={classes['blue']} >Exclusive</b> webinar access
              </div>
            </li>
            <li className={classes["pointer"]}>
              <img
                className={classes["icon-2"]}
                alt="Icon"
                src="https://generation-sessions.s3.amazonaws.com/8cdef5d0e8f75dbe09d3055dcd9a6e6e/img/icon.svg"
              />
              <div className={classes["text-container-2"]}>
                <div className={classes["div-wrapper-2"]}>
                Scholarship worth <b className={classes['blue']}>₹94,500</b>
                </div>
              </div>
            </li>
            <div className={classes["pointer"]}>
              <div className={classes["icon-3"]}>
                <div className={classes["overlap-group-wrapper"]}>
                  <div className={classes["overlap-group-3"]}>
                    <div className={classes["text-wrapper-13"]}>ADS</div>
                    <div className={classes["rectangle-2"]} />
                  </div>
                </div>
              </div>
              <div className={classes["div-wrapper-2"]}>
              <b className={classes['blue']}>Ad Free</b> learning experience
              </div>
            </div>
            </ul>
    </div>
  )
}

export default CourseDetails
