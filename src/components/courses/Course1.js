import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import CourseCard from "../CourseCard";
import VideoEmbed from "../VideoEmbed";

import styles from "./course.module.css";

const Course1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={styles.Modal}
        overlayClassName={styles.Modal}
      >
        <div className={styles.modalCloseX} onClick={closeModal}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 10L20 20M10 20L20 10" stroke="#5B7E7E" />
          </svg>
        </div>
        <h4 className={styles.topic}>PERSONAL FINANCE</h4>
        <h2 className={styles.lesson_name}>
          Introduction to the world of personal finances and more!
          <br />
          &nbsp;
        </h2>
        <p className={styles.intro}>
          When you think about personal finance, it often circles around
          planning your financials today, so that you have a better tomorrow.
          While some can do this themselves, few consult a financial advisor to
          chart this map for them. Good news is, personal finance is not rocket
          science. If you have the skills to do basic arithmetic, then half the
          battle is won. The rest of the work is just the application part where
          you’ll figure out what is good and what is not.
        </p>
        <br />
        <p className={styles.credits}>
          <em>FinSchool</em>
          <br />
          ON APRIL 2, 2022
        </p>
        <hr />

        <p className={styles.content}>
          This is exactly the objective of FinSchool. At the end of the courses,
          you will be in a position to do these things –
          <ul>
            <li>
              Develop a deeper understanding of financial products and what goes
              under the hood
            </li>
            <li> Set up a financial goal and work towards achieving that</li>
            <li>
              Identify financial setbacks and address towards correcting them
            </li>
          </ul>
        </p>
        <VideoEmbed
          title="How to Manage Your Money: Six Principles of Personal Finance"
          link="https://www.youtube.com/embed/vl2sasYSY4E"
        />
        <hr />
        <p className={styles.content}>
          This is exactly the objective of FinSchool. At the end of the courses,
          you will be in a position to do these things –
          <ul>
            <li>
              Develop a deeper understanding of financial products and what goes
              under the hood
            </li>
            <li> Set up a financial goal and work towards achieving that</li>
            <li>
              Identify financial setbacks and address towards correcting them
            </li>
          </ul>
        </p>
        <Link to="/quiz">
          <div
            onClick={() => {
              console.log("no we broke");
            }}
            className={styles.moneyButton}
          >
            Give my money!
          </div>
        </Link>
      </Modal>

      {!isOpen && (
        <CourseCard
          complete="0"
          topic="PERSONAL FINANCE"
          lesson_name="Introduction to the world of personal finances and more!"
          difficulty="easy"
          reward="250"
          img="/src/assets/course_1.png"
          onClick={openModal}
        />
      )}
    </React.Fragment>
  );
};

export default Course1;
