import React from "react";
import styles from "./learn-page.module.css";

import Footer from "../components/Footer";
import Course1 from "../components/courses/Course1";
import Course2 from "../components/courses/Course2";
import Course3 from "../components/courses/Course3";
import Course4 from "../components/courses/Course4";
import Course5 from "../components/courses/Course5";

export const LearnPage = () => {
  return (
    <React.Fragment>
      <section className={styles.margin}>
        <h2>Learning Courses</h2>
        <h3>Complete your financial empowerment journey</h3>

        {/* Mapping all course cards => */}
        {/* {course_data.map((course) => (
          <CourseCard
            complete="0"
            topic={course.topic}
            lesson_name={course.lesson_name}
            difficulty={course.difficulty}
            reward={course.reward}
          />
        ))} */}
        <Course1 />
        <Course2 />
        <Course3 />
        <Course4 />
        <Course5 />
        <div className={styles.spacer}></div>
      </section>
      <Footer active="1" />
    </React.Fragment>
  );
};
