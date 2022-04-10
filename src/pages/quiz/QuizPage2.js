import React from "react";
import styles from "./QuizFlow.module.css";

const QuizPage2 = (props) => {
  console.log("active option is" + props.option);
  return (
    <React.Fragment>
      <div className={styles.options}>
        <div className={props.option === 1 ? styles.border : ""}>
          Go on the trip <br />
          You gain happiness from the experience, but at a great cost. Was the
          trip really worth it?
        </div>
        <div className={props.option === 2 ? styles.border : ""}>
          Ask Shree for sponsorship <br />
          Asking a friend is no different than asking your parents. Earning it
          yourself is more fun!
        </div>
        <div className={props.option === 3 ? styles.border : ""}>
          Play sick <br />
          Such experiences are important. Consider options that would allow you
          to go.
        </div>
        <div className={props.option === 4 ? styles.border : ""}>
          Sleep and ignore texts <br />
          Friends are important. Be nice.
        </div>
      </div>
      <img
        alt="graph"
        src={require("../../assets/graph.png")}
        className={styles.graph}
      ></img>
      <div onClick={props.onPageChange} className={styles["btn-primary"]}>
        Next
      </div>
    </React.Fragment>
  );
};

export default QuizPage2;
