import React, { useEffect } from "react";

import styles from "./TableFooter.module.css";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div id={styles.fullTableFooter}>
      <p onClick={() => setPage(1)} className={styles.flButton}>
        First
      </p>
      <p
        onClick={() => {
          if (page != 1) setPage(page - 1);
        }}
        className={styles.flButton}
      >
        Previous
      </p>
      <div className={styles.tableFooter}>
        {range.map((el, index) => (
          <p
            key={index}
            className={`${styles.button} ${
              page === el ? styles.activeButton : styles.inactiveButton
            }`}
            onClick={() => setPage(el)}
          >
            {el}
          </p>
        ))}
      </div>
      <p
        onClick={() => {
          if (page != range.length) setPage(page + 1);
        }}
        className={styles.flButton}
      >
        Next
      </p>
      <p onClick={() => setPage(range.length)} className={styles.flButton}>
        Last
      </p>
    </div>
  );
};

export default TableFooter;
