import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import CourseCard from "../CourseCard";
import VideoEmbed from "../VideoEmbed";

import styles from "./course.module.css";

const Course2 = (props) => {
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
        <h4 className={styles.topic}>EXPENSES & BUDGETING</h4>
        <h2 className={styles.lesson_name}>
          Adulting 101: Budgeting
          <br />
          &nbsp;
        </h2>
        <p className={styles.intro}>
          Preparing a budget or a financial plan is critical for giving you the
          best shot at achieving your personal and family goals. A personal or
          household budget is a summary that compares and tracks your income and
          expenses for a defined period, typically one month. While the word
          "budget" is often associated with restricted spending, a budget does
          not have to be restrictive to be effective. Budgeting is a way to
          manage your income, expenses, savings and investments.
        </p>
        <br />
        <p className={styles.credits}>
          <em>FinSchool</em>
          <br />
          ON APRIL 2, 2022
        </p>
        <hr />

        <p className={styles.content}>
          There are three potential sources of income (salary, bonus, and
          other), followed by a list of expenses (rent, food, groceries,
          restaurants, entertainment, childcare costs, vacations, etc.), and the
          difference between the two is the person’s monthly surplus or deficit.
          Considering all these sources, there are 6 simple steps to create a
          budget:
          <br />
          &nbsp;
          <ol>
            <li>Gather your Financial Paperwork</li>
            <li> Calculate your income</li>
            <li>Create a list of Monthly Expenses</li>
            <li>Determine Fixed and Variable Expenses</li>
            <li>Total your Monthly Income and Expenses</li>
            <li>Make adjustments to expenses</li>
          </ol>
        </p>
        <VideoEmbed
          link="https://www.youtube.com/embed/Hqccf7o_bDU"
          title="How To Budget Monthly For Beginners | Step By Step Guide (Free Budget Template)"
        />
        <hr />
        <p className={styles.content}>
          <strong>Budgeting methods</strong>
          <br />
          &nbsp;
          <br />
          There’s not necessarily one right way to budget. Instead, it’s about
          finding the strategy that works best for you. There are several
          different budgeting methods that people have had success with. A few
          popular ones include: –
          <br />
          &nbsp;
          <ul>
            <li>50/30/20 budget</li>
            <li> Zero-based budget</li>
            <li>Pay yourself first</li>
            <li>Envelope system</li>
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
          topic="EXPENSES & BUDGETING"
          lesson_name="Adulting 101: Budgeting"
          difficulty="easy"
          reward="250"
          onClick={openModal}
        />
      )}
    </React.Fragment>
  );
};

export default Course2;
