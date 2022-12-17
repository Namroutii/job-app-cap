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
        &#171;
      </p>
      <p
        onClick={() => {
          if (page != 1) setPage(page - 1);
        }}
        className={styles.flButton}
      >
        &#8249;
      </p>
      <div className={styles.tableFooter}>
        {range.map((el, index) => (
          <p
            key={index}
            className={`${styles.button} ${
              page === el ? styles.activeButton : styles.inactiveButton
            }`}
            onClick={() => {
              setPage(el);
              window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
            }}
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
        &#8250;
      </p>
      <p onClick={() => setPage(range.length)} className={styles.flButton}>
        &#187;
      </p>
    </div>
  );
};

export default TableFooter;
