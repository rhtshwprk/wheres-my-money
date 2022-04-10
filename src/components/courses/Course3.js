import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import CourseCard from "../CourseCard";
import VideoEmbed from "../VideoEmbed";
import styles from "./course.module.css";

const Course3 = (props) => {
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
        <h4 className={styles.topic}>SAVINGS</h4>
        <h2 className={styles.lesson_name}>
          Prioritising Savings
          <br />
          &nbsp;
        </h2>
        <p className={styles.intro}>
          It probably doesn’t come as a surprise that saving is one of the most
          important components of personal finance, but most people simply
          aren’t doing it.
          <br />
          &nbsp;
          <br />
          The first saving priority most people should have is an emergency
          fund. Your emergency fund can help you cover any unforeseen expenses.
          It can also serve as an income replacement in the event that you lose
          your job. Most experts recommend having between three and six month’s
          worth of expenses saved in your emergency fund.
        </p>
        <br />
        <p className={styles.credits}>
          <em>FinSchool</em>
          <br />
          ON APRIL 2, 2022
        </p>
        <hr />
        <VideoEmbed
          link="https://www.youtube.com/embed/DoR5r1Lu7BM"
          title="How to Prioritize Savings"
        />
        <p className={styles.content}>
          The other type of saving you might do is for specific financial goals.
          Whether it’s a dream vacation or the downpayment on a home, saving
          will help you get there.
          <br />
          &nbsp;
          <br />
          Unfortunately, there’s no magic pill or secret to saving money — you
          just have to do it. When it comes to saving for a big goal, the best
          way to reach it is to divide the total number you need to save by the
          number of months you’d like to have it saved. That will tell you how
          much to save each month to reach your goal.
        </p>
        <hr />
        <VideoEmbed
          link="https://www.youtube.com/embed/IrA2xv4vEPM"
          title="How to Set up Your Emergency Fund"
        />
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
          topic="SAVINGS"
          lesson_name="Prioritising Savings
          "
          difficulty="moderate"
          reward="450"
          onClick={openModal}
        />
      )}
    </React.Fragment>
  );
};

export default Course3;
