import React from "react";
import styles from "./QuizFlow.module.css";
const QuizPage3 = (props) => {
  return (
    <React.Fragment>
      <img
        className={styles.quizImg}
        alt="Man in Car"
        src={require("../../assets/quiz2.png")}
      ></img>
      <p className={styles.ques}>
        You know you would need $500 in about 6 months. There are many ways you
        could save up for that time.{" "}
      </p>
      <p className={styles.ques}>What would you choose to do?</p>
      <div>
        <div
          onClick={() => {
            props.onPageChange();
            props.setOption(1);
          }}
          className={styles["btn-secondary"]}
        >
          Put the cash under your bed
        </div>
        <div
          onClick={() => {
            props.onPageChange();
            props.setOption(2);
          }}
          className={styles["btn-secondary"]}
        >
          Invest in a fixed deposit account
        </div>
        <div
          onClick={() => {
            props.onPageChange();
            props.setOption(3);
          }}
          className={styles["btn-secondary"]}
        >
          Buy lots of DOGE
        </div>
        <div
          onClick={() => {
            props.onPageChange();
            props.setOption(4);
          }}
          className={styles["btn-secondary"]}
        >
          I’ll worry about it later
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizPage3;
