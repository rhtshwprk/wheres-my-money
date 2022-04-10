import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import CourseCard from "../CourseCard";
import VideoEmbed from "../VideoEmbed";

import styles from "./course.module.css";

const Course5 = (props) => {
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
          Credit Cards
          <br />
          &nbsp;
        </h2>
        <p className={styles.intro}>
          We often hear of credit cards leading their holders into debt traps.
          However, it is not credit cards per se, but financial indiscipline
          that leads users to incur steep penalties and finance charges, leading
          to debt traps. If used well, credit cards can be tools to build your
          credit profile and to save money.
        </p>
        <br />
        <p className={styles.credits}>
          <em>FinSchool</em>
          <br />
          ON APRIL 2, 2022
        </p>
        <hr />
        <VideoEmbed
          link="https://www.youtube.com/embed/fle2zwbeVMs"
          title="How to Use Credit Cards Wisely"
        />

        <p className={styles.content}>
          If used wisely, credit cards can help in:
          <br />
          <br />
          <strong>Building credit score:</strong> Transactions made through
          credit cards are similar to availing loans. Credit card issuers report
          credit card transactions to credit bureaus, which in turn use this
          information to calculate your credit score. However, unlike on loans,
          credit card users do not incur interest costs on transactions as long
          as they repay dues before the due date. This way, you can make the
          proper use of credit cards to build your credit score.
          <br />
          <br />
          <strong>Finance spending through EMIs:</strong> Credit card issuers
          allow equated monthly instalment (EMI) conversion facility to card
          users for specific transactions exceeding the threshold limit or for
          the entire bill amount or a part of it. This option is beneficial for
          those unable to repay their total credit card bill by the due date. It
          can also be helpful for those unable to make essential big-ticket
          spending owing to lack of repayment capacity. The EMI conversion
          option usually comes with a loan tenure of six to 60 months, allowing
          cardholders to choose their loan tenure as per their repayment
          capacity.
          <br />
          <br />
          <strong>Saving through card benefits:</strong> Credit card issuers try
          to attract card users to transact more by offering reward points,
          discounts, vouchers, cash backs, etc., on transactions. One can make
          the most of such benefits by opting for cards whose reward points
          structure and benefits match their lifestyle and spending pattern the
          most.
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
          difficulty="hard"
          reward="800"
          onClick={openModal}
        />
      )}
    </React.Fragment>
  );
};

export default Course5;
