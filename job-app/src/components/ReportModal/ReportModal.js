import { useState } from "react";
import styles from "./ReportModal.module.css";
import "./ReportModal.css";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const ReportModal = () => {
  const [hiddenPopup, setHiddenPopup] = useState(true);
  const popupTimer = async () => {
    await delay(5000);
    setHiddenPopup(true);
  };

  const reportHandler = () => {
    setHiddenPopup(false);
    popupTimer();
  };
  return (
    <>
      <div
        className="modal fade"
        id="reportModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body" id={styles.modalBody}>
              <h1 id={styles.header}>Report A CV</h1>
              <p>
                As accurately as possible, please tell us whats the problem with
                this CV.
              </p>
              <div id={styles.choices}>
                <div>
                  <input type="checkbox" id="noSense" />
                  <label htmlFor="noSense">The Data Don't Make Sense</label>
                </div>
                <div>
                  <input type="checkbox" id="wrong" />
                  <label htmlFor="wrong">
                    Wrong Data &#0040;the information in the cv are not
                    true&#0041;
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="bad" />
                  <label htmlFor="bad">Inappropriate Name</label>
                </div>
              </div>
              <p id={styles.giveDetails}>please give any other detail...</p>
              <textarea rows="20" cols="50" id={styles.details} />
              <div id={styles.buttons}>
                <button id={styles.cancelBtn} data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  id={styles.reportBtn}
                  data-bs-dismiss="modal"
                  onClick={reportHandler}
                >
                  Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id={hiddenPopup ? "hiddenPopup" : "visiblePopup"}
        onClick={() => setHiddenPopup(true)}
      >
        The CV has been reported. Thanks for the feedback!
      </div>
    </>
  );
};
export default ReportModal;
