import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import CourseCard from "../CourseCard";
import VideoEmbed from "../VideoEmbed";

import styles from "./course.module.css";

const Course4 = (props) => {
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
        <h4 className={styles.topic}>INVESTING</h4>
        <h2 className={styles.lesson_name}>
          Investing 101
          <br />
          &nbsp;
        </h2>
        <p className={styles.intro}>
          Investing can be an intimidating topic when you first get started, but
          it’s actually one of the most important aspects of your finances. Why
          is that? Well, most people can’t save enough money to retire. Instead,
          when you invest, your money compounds and grows at a much faster rate.
          The hope is that it eventually compounds enough that you can retire.
        </p>
        <br />
        <p className={styles.credits}>
          <em>FinSchool</em>
          <br />
          ON APRIL 2, 2022
        </p>

        <hr />

        <p className={styles.content}>
          A recent survey discovered that the average family believes they’ll
          need about $1.9 million to retire comfortably. Unfortunately, the
          average family also only has about $255,200 in retirement accounts.
          Luckily, by starting early and investing consistently, you can reach
          your retirement goals.
          <br />
          &nbsp;
          <br />
          Remember that you can also invest in non-retirement taxable brokerage
          accounts, but it’s generally recommended that you first max out your
          tax-advantaged retirement accounts.
        </p>
        <VideoEmbed
          link="https://www.youtube.com/embed/rY_KGzQ5mvE"
          title="Investing vs. Trading: What’s the Difference?"
        />
        <hr />
        <p className={styles.content}>
          <strong>Investing 101 </strong>
          <br />
          There are a few investing terms everyone should know before they start
          investing:
          <br />
          <br />
          <strong>Asset allocation:</strong>
          How you divide your assets up across all of your investments <br />
          <strong>Time horizon:</strong> The number of years before you expect
          to need the money you’re investing
          <br />
          <strong>Diversification: </strong>The practice of spreading your money
          across many different investments <br />
          <strong>Risk tolerance: </strong>
          Your ability and willingness to lose money in the stock market
          <br />
          <br />
          <br />
          <br />
          There are different types of investing options available like: Bonds,
          Stocks Mutual Funds, Forex, ESOPs etc. These will be covered in detail
          in the upcoming modules.
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
          topic="INVESTING"
          lesson_name="Investing 101"
          difficulty="hard"
          reward="700"
          onClick={openModal}
        />
      )}
    </React.Fragment>
  );
};

export default Course4;
