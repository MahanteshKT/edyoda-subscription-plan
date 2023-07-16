import React from 'react'
import classes from "./NavBar.module.css"
function NavBar() {
  return (
    <div className={classes["nav-bar"]}>
        <div className={classes["container"]}>
          <div className={classes["div"]}>
            <div className={classes["LOGO"]}>
              <div className="text-wrapper">EDYODA</div>
            </div>
            <div className={classes["div-2"]}>
              <div className={classes["text"]}>Courses</div>
              <img
                className={classes["img"]}
                alt="Icon chevron down"
                src="https://generation-sessions.s3.amazonaws.com/8cdef5d0e8f75dbe09d3055dcd9a6e6e/img/icon-chevron-down-1.svg"
              />
            </div>
            <div className={classes["div-2"]}>
              <div className={classes["text"]}>Programs</div>
              <img
                className={classes["img"]}
                alt="Icon chevron down"
                src="https://generation-sessions.s3.amazonaws.com/8cdef5d0e8f75dbe09d3055dcd9a6e6e/img/icon-chevron-down-1.svg"
              />
            </div>
          </div>
          <div className={classes["div"]}>
            <img
              className="img"
              alt="Search icon"
              src="https://generation-sessions.s3.amazonaws.com/8cdef5d0e8f75dbe09d3055dcd9a6e6e/img/search-icon.svg"
            />
            <div className={classes["log-in"]}>
              <div className="text-2">Log in</div>
            </div>
            <div className={classes["primary-button"]}>
              <div className={classes["text-3"]}>JOIN NOW</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NavBar
