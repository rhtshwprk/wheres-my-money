import React from "react";
import Footer from "../components/Footer";
import PortfolioCard from "../components/PortfolioCard";
import styles from "./portfolio-page.module.css";

export const PortfolioPage = () => {
  return (
    <React.Fragment>
      <section className={styles.margin}>
        <PortfolioCard />
        <hr className={styles.hr} />
        <div className={styles.h3}>See all investments</div>
        <button className={styles.btn}>View portfolio</button>
        <hr className={styles.hr} />
        <div className={styles.h3}>Expenses</div>
      </section>

      <Footer active="3" />
    </React.Fragment>
  );
};
