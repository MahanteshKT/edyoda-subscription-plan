import React from 'react'
import classes from "./CoursePage.module.css";
import CourseDetails from './CourseDetails/CourseDetails';
import CourseForm from './CourseForm/CourseForm';

const CoursePage = () => {
  return (
    <div className={classes["content-container"]}>
        <div className={classes.overlap}>
            <CourseDetails/>
            <CourseForm/>
        </div>
      </div>
  )
}

export default CoursePage
