import React from "react";
import styles from "./QuizFlow.module.css";
const QuizPage1 = (props) => {
  return (
    <React.Fragment>
      <img
        className={styles.quizImg}
        alt="Man in Car"
        src={require("../../assets/quiz1.png")}
      ></img>
      <p className={styles.ques}>
        Rishi your friends just called you for a trip to Bangkok, you have just
        $7000.00 dollars in your bank account, and the trips requires you to
        spend atleast a $1500.00 and some misc expenses. What would you do?
      </p>
      <div>
        <div
          onClick={() => {
            props.onPageChange();
            props.setOption(1);
          }}
          className={styles["btn-secondary"]}
        >
          Go on the trip
        </div>
        <div
          onClick={() => {
            props.onPageChange();
            props.setOption(2);
          }}
          className={styles["btn-secondary"]}
        >
          Ask Shree for sponsorship
        </div>
        <div
          onClick={() => {
            props.onPageChange();
            props.setOption(3);
          }}
          className={styles["btn-secondary"]}
        >
          Play sick
        </div>
        <div
          onClick={() => {
            props.onPageChange();
            props.setOption(4);
          }}
          className={styles["btn-secondary"]}
        >
          Sleep and ignore texts
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizPage1;
