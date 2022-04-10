import React from "react";
import styles from "./POrtfoliocard.module.css";
const PortfolioCard = () => {
  return (
    <div class={styles.card}>
      <div className={styles.row}>
        <div className={styles.label}>Total Wealth</div>
        <div className={styles.big}>$14200.00 </div>
      </div>
      <hr />
      <div className={styles.row}>
        <div className={styles.label}>Stock Investments</div>
        <div className={styles.small}>$5000.00 </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}> Liquid Wealth</div>
        <div className={styles.small}>$4200.00 </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}> Mutual Funds</div>
        <div className={styles.small}>$5000.00 </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
