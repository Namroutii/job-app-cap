import styles from "./FullCVModal.module.css";
import "./FullCVModal.css";
import { useState } from "react";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const FullCVModal = (props) => {
  const [hiddenPopup, setHiddenPopup] = useState(true);
  const el = props.row;
  let id = "r" + el.id;
  const popupTimer = async () => {
    await delay(5000);
    setHiddenPopup(true);
  };
  switch (el.position) {
    case "IT":
      return (
        <div
          className="modal fade"
          id={id}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className={styles.fullCVHead}>
                  <h1 className={styles.fullCVName}>{el.name}</h1>
                  <p className={styles.fullCVPosition}>{el.position}</p>
                </div>
                <div className={styles.fullCVContact}>
                  <div className="row">
                    <div className="col">
                      Email: <a href="">{el.email}</a>
                    </div>
                    <div className="col" id={styles.phone}>
                      Phone: {el.phone}
                    </div>
                  </div>
                  <div className="row">
                    <p className="col">
                      LinkedIn: <a href="">{el.linked_in}</a>
                    </p>
                    <p className="col">
                      Github: <a href="">{el.github}</a>
                    </p>
                  </div>
                </div>

                <div className={styles.fullCVBodyComponent}>
                  <h2>Work History</h2>
                  <p>{el.company}</p>
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Education</h2>
                  <p>{el.degree}</p>
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Skills</h2>
                  <p>{el.skills}</p>
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Languages</h2>
                  <p>{el.languages}</p>
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Programming Languages</h2>
                  <p>{el.programming_languages}</p>
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Specializing at</h2>
                  <p> {el.it_job}</p>
                </div>
              </div>
              <div className="modal-footer">
                <span
                  className={hiddenPopup ? "hiddenPopup" : "visiblePopup"}
                  onClick={() => {
                    setHiddenPopup(true);
                  }}
                >
                  The CV has been reported to the admins. Thanks for your
                  feedback.
                </span>
                <button
                  className={styles.reportButton}
                  onClick={() => {
                    setHiddenPopup(false);
                    popupTimer();
                  }}
                >
                  Report
                </button>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    case "Accountant":
      return (
        <div
          className="modal fade"
          id={id}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className={styles.fullCVHead}>
                  <h1 className={styles.fullCVName}>{el.name}</h1>
                  <p className={styles.fullCVPosition}>{el.position}</p>
                </div>
                <div className={styles.fullCVContact}>
                  <div className="row">
                    <div className="col">
                      Email: <a href="">{el.email}</a>
                    </div>
                    <p className="col">Phone: {el.phone}</p>
                  </div>
                  <div className="row">
                    <p className="col">
                      LinkedIn: <a href="">{el.linked_in}</a>
                    </p>
                  </div>
                </div>

                <div className={styles.fullCVBodyComponent}>
                  <h2>Work History</h2>
                  {el.company}
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Education</h2>
                  {el.degree}
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Skills</h2>
                  {el.skills}
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Languages</h2>
                  {el.languages}
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Softwares Used</h2>
                  {el.accountant_software}
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      );
      break;

    case "Designer":
      return (
        <div
          className="modal fade"
          id={id}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className={styles.fullCVHead}>
                  <h1 className={styles.fullCVName}>{el.name}</h1>
                  <p className={styles.fullCVPosition}>{el.position}</p>
                </div>
                <div className={styles.fullCVContact}>
                  <div className="row">
                    <div className="col">
                      Email: <a href="">{el.email}</a>
                    </div>
                    <p className="col">Phone: {el.phone}</p>
                  </div>
                  <div className="row">
                    <p className="col">
                      LinkedIn: <a href="">{el.linked_in}</a>
                    </p>
                  </div>
                </div>

                <div className={styles.fullCVBodyComponent}>
                  <h2>Work History</h2>
                  {el.company}
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Education</h2>
                  {el.degree}
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Skills</h2>
                  {el.skills}
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Languages</h2>
                  {el.languages}
                </div>
                <div className={styles.fullCVBodyComponent}>
                  <h2>Softwares Used</h2>
                  {el.designer_software}
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      );
  }
};
export default FullCVModal;
