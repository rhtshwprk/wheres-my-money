import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
const Footer = (props) => {
  const active_fill = "#E6B760";
  const inactive_fill = "#273838";
  const fill_1 = props.active === "1" ? active_fill : inactive_fill;
  const fill_2 = props.active === "2" ? active_fill : inactive_fill;
  const fill_3 = props.active === "3" ? active_fill : inactive_fill;
  const fill_4 = props.active === "4" ? active_fill : inactive_fill;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_element}>
        <NavLink to="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6C2 6 3.5 4 7 4C10.5 4 12 6 12 6V20C12 20 10.5 19 7 19C3.5 19 2 20 2 20V6ZM12 6C12 6 13.5 4 17 4C20.5 4 22 6 22 6V20C22 20 20.5 19 17 19C13.5 19 12 20 12 20V6Z"
              stroke={`${fill_1}`}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className={styles.footer_text} style={{ color: fill_1 }}>
            Learn
          </p>
        </NavLink>
      </div>
      <div className={styles.footer_element}>
        <NavLink to="/simulator">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5208 17.5077H3.14583C3.0427 17.5077 2.95833 17.5921 2.95833 17.6952V19.0077C2.95833 19.1108 3.0427 19.1952 3.14583 19.1952H21.5208C21.624 19.1952 21.7083 19.1108 21.7083 19.0077V17.6952C21.7083 17.5921 21.624 17.5077 21.5208 17.5077ZM4.21692 14.5733L5.14739 15.4991C5.22005 15.5718 5.33958 15.5718 5.41223 15.4991L10.913 10.0171L13.2005 12.2975C13.3414 12.4372 13.5318 12.5155 13.7302 12.5155C13.9286 12.5155 14.119 12.4372 14.2599 12.2975L20.4521 6.12879C20.5247 6.05613 20.5247 5.9366 20.4521 5.86394L19.5216 4.93582C19.4864 4.90092 19.4388 4.88135 19.3892 4.88135C19.3396 4.88135 19.292 4.90092 19.2568 4.93582L13.7325 10.4436L11.4427 8.16316C11.3018 8.02353 11.1114 7.94519 10.913 7.94519C10.7146 7.94519 10.5243 8.02353 10.3833 8.16316L4.21692 14.3085C4.19939 14.3258 4.18547 14.3464 4.17597 14.3691C4.16647 14.3919 4.16158 14.4163 4.16158 14.4409C4.16158 14.4655 4.16647 14.4899 4.17597 14.5127C4.18547 14.5354 4.19939 14.556 4.21692 14.5733Z"
              fill={`${fill_2}`}
            />
          </svg>

          <p className={styles.footer_text} style={{ color: fill_2 }}>
            Simulate
          </p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/portfolio">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.16666 10H5.16666V17H7.16666V10ZM13.1667 10H11.1667V17H13.1667V10ZM21.6667 19H2.66666V21H21.6667V19ZM19.1667 10H17.1667V17H19.1667V10ZM12.1667 3.26L17.3767 6H6.95666L12.1667 3.26ZM12.1667 1L2.66666 6V8H21.6667V6L12.1667 1Z"
              fill={`${fill_3}`}
            />
          </svg>

          <p className={styles.footer_text} style={{ color: fill_3 }}>
            Portfolio
          </p>
        </NavLink>
      </div>
      <div>
        <NavLink to="/profile">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10.5C9.92887 10.5 8.25 8.82106 8.25 6.75C8.25 4.67894 9.92887 3 12 3C14.0711 3 15.75 4.67894 15.75 6.75C15.75 8.82106 14.0711 10.5 12 10.5Z"
              stroke={`${fill_4}`}
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M4.5 20.5V19.25C4.5 16.4886 6.73857 14.25 9.5 14.25H14.5C17.2614 14.25 19.5 16.4886 19.5 19.25V20.5"
              stroke={`${fill_4}`}
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <p className={styles.footer_text} style={{ color: fill_4 }}>
            Profile
          </p>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
