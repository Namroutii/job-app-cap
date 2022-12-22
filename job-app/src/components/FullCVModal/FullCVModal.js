import styles from "./FullCVModal.module.css";
import "./FullCVModal.css";
import { useState } from "react";
const FullCVModal = (props) => {
  const [hiddenPopup, setHiddenPopup] = useState(true);
  const el = props.row;
  let id = "r" + el.id;
  let github = "";
  let programming_languages = "";
  let Specializing = "";
  let softwares = "";
  if (el.position == "IT") {
    github = (
      <p className="col">
        Github: <a href="">{el.github}</a>
      </p>
    );
    programming_languages = (
      <div className={styles.fullCVBodyComponent}>
        <h2>Programming Languages</h2>
        <p>{el.programming_languages}</p>
      </div>
    );
    Specializing = (
      <div className={styles.fullCVBodyComponent}>
        <h2>Specializing at</h2>
        <p> {el.it_job}</p>
      </div>
    );
  }
  if (el.position == "Designer")
    softwares = (
      <div className={styles.fullCVBodyComponent}>
        <h2>Softwares Used</h2>
        {el.designer_software}
      </div>
    );
  if (el.position == "Accountant")
    softwares = (
      <div className={styles.fullCVBodyComponent}>
        <h2>Softwares Used</h2>
        {el.accountant_software}
      </div>
    );

  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
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
                {github}
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
            {programming_languages}
            {Specializing}
            {softwares}
          </div>
          <div className="modal-footer">
            <button
              className={styles.reportButton}
              data-bs-toggle="modal"
              data-bs-target="#reportModal"
            >
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FullCVModal;
