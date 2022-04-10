import React, { useState } from "react";
import styles from "./QuizFlow.module.css";
import { Link } from "react-router-dom";
import QuizPage0 from "./QuizPage0";
import QuizPage1 from "./QuizPage1";
import QuizPage2 from "./QuizPage2";
import QuizPage3 from "./QuizPage3";
import QuizPage4 from "./QuizPage4";
import QuizPage5 from "./QuizPage5";
import QuizPage6 from "./QuizPage6";
const QuizFlow = () => {
  const [page, setPage] = useState(0);
  const pageSetter = () => {
    setPage(page + 1);
  };

  const [option, setOption] = useState(0);
  const optionSetter = (op) => {
    setOption(op);
    console.log("option has been set:" + op);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.margin}>
        <Link to="/">
          <div className={styles.closeX}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 10L20 20M10 20L20 10" stroke="#fff" />
            </svg>
          </div>
        </Link>
        {page === 0 && <QuizPage0 onPageChange={pageSetter} />}
        {page === 1 && (
          <QuizPage1 onPageChange={pageSetter} setOption={optionSetter} />
        )}
        {page === 2 && <QuizPage2 onPageChange={pageSetter} option={option} />}
        {page === 3 && (
          <QuizPage3 onPageChange={pageSetter} setOption={optionSetter} />
        )}
        {page === 4 && <QuizPage4 onPageChange={pageSetter} option={option} />}
        {page === 5 && (
          <QuizPage5 onPageChange={pageSetter} setOption={optionSetter} />
        )}
        {page === 6 && <QuizPage6 onPageChange={pageSetter} option={option} />}
      </div>
    </div>
  );
};

export default QuizFlow;
