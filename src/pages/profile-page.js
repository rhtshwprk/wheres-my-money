import React from "react";

import Footer from "../components/Footer";
import styles from "./profile-page.module.css";

export const ProfilePage = () => {
  return (
    <React.Fragment>
      <section className={styles.margin}>
        <h2>Profile</h2>
        <div className={styles.grp}>
          <p className={styles.grplabel}>NAME</p>
          <p className={styles.value}>Shreevardhan Shah</p>
        </div>
        <div className={styles.grp}>
          <p className={styles.grplabel}>EMAIL</p>
          <p className={styles.value}>shreeshah@gmail.com</p>
        </div>
        <button className={styles.signout}>Sign Out</button>
      </section>
      <Footer active="4" />
    </React.Fragment>
  );
};
