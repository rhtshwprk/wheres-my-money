import React from "react";
import styles from "./QuizFlow.module.css";
import { Link } from "react-router-dom";
const QuizPage6 = (props) => {
  console.log("active option is" + props.option);
  return (
    <React.Fragment>
      <div className={styles.options}>
        <div className={props.option === 1 ? styles.border : ""}>
          Put the cash under your bed
          <br />
          This is not that bad a plan, but why not put it in your bank account
          for some sweet interest?
        </div>
        <div className={props.option === 2 ? styles.border : ""}>
          Put the money in a fixed deposit account <br />
          Good idea. Your money is safe and you can’t spend it until when you
          need it.
        </div>
        <div className={props.option === 3 ? styles.border : ""}>
          Buy lots of DOGE <br />
          Only invest money that you can afford to lose. Maybe not the best
          choice this time.
        </div>
        <div className={props.option === 4 ? styles.border : ""}>
          I’ll worry about it later <br />
          Worse than buying DOGE.
        </div>
      </div>
      <img
        alt="graph"
        src={require("../../assets/graph.png")}
        className={styles.graph}
      ></img>
      <Link to="/">
        <div onClick={props.onPageChange} className={styles["btn-primary"]}>
          Next
        </div>
      </Link>
    </React.Fragment>
  );
};

export default QuizPage6;
