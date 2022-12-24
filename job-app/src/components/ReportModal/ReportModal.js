import { useState } from "react";
import styles from "./ReportModal.module.css";
import "./ReportModal.css";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const ReportModal = ({ row, setHiddenPopup }) => {
  const [noSense, setNoSense] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [bad, setBad] = useState(false);
  const [moreInfo, setMoreInfo] = useState("");
  const id = "a" + row.id;

  const popupTimer = async () => {
    await delay(5000);
    setHiddenPopup(true);
  };

  const reportHandler = () => {
    let myArray = JSON.parse(localStorage.getItem("reportedCVs")) || [];
    const sense = noSense ? "The Data Make no Sense," : "";
    const wrongData = wrong ? "The Data are not True," : "";
    const badName = bad ? "The Name is Inappropriate," : "";
    const obj = {
      id: row.id,
      details: [badName, sense, wrongData, moreInfo],
    };
    myArray.push(obj);

    localStorage.setItem("reportedCVs", JSON.stringify(myArray));
    setHiddenPopup(false);
    popupTimer();
  };
  return (
    <div>
      <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
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
                  <input
                    type="checkbox"
                    id="noSense"
                    checked={noSense}
                    onChange={() =>
                      noSense ? setNoSense(false) : setNoSense(true)
                    }
                  />
                  <label htmlFor="noSense">The Data Don't Make Sense</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="wrong"
                    checked={wrong}
                    onChange={() => (wrong ? setWrong(false) : setWrong(true))}
                  />
                  <label htmlFor="wrong">
                    Wrong Data &#0040;the information in the cv are not
                    true&#0041;
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="bad"
                    checked={bad}
                    onChange={() => (bad ? setBad(false) : setBad(true))}
                  />
                  <label htmlFor="bad">Inappropriate Name</label>
                </div>
              </div>
              <p id={styles.giveDetails}>please give any other detail...</p>
              <textarea
                rows="20"
                cols="50"
                id={styles.details}
                onChange={(e) => {
                  setMoreInfo(e.target.value);
                }}
              />
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
    </div>
  );
};
export default ReportModal;
