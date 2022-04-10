import React from "react";
import styles from "./QuizFlow.module.css";

import { ReactComponent as Glasses } from "../../assets/glasesSVG.svg";

const QuizPage0 = (props) => {
  return (
    <React.Fragment>
      <h3 className={styles.heading}>Not so easily!</h3>
      <p className={styles.intro}>
        Welcome Rishi, you just started your first job and now it is time to
        make decisions which will decide whether you eat Caviar or Dollar Pizza
        for the rest of your life!
      </p>
      <ol className={styles.instructions}>
        <li>There are no right or wrong answers.</li>
        <li>
          At the end of every Quiz, you will see shifts in your inclination
          towards saving or spending.ong answers.
        </li>
        <li>
          Completing each quiz will earn you rewards, that can be used in our
          simulators.
        </li>
      </ol>
      <div onClick={props.onPageChange} className={styles["btn-primary"]}>
        Lets Begin
      </div>
      <Glasses className={styles.glasses} />
    </React.Fragment>
  );
};

export default QuizPage0;
