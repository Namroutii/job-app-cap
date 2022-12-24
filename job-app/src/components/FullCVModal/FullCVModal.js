import styles from "./FullCVModal.module.css";
import "./FullCVModal.css";
import { useState } from "react";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FullCVModal = ({ row, forPage, tableData, setTableData }) => {
  const [deletePopup, setDeletePopup] = useState(true);
  const [denyPopup, setDenyPopup] = useState(true);
  const [deletedReport, setDeletedReport] = useState(false);

  const popupTimer = async () => {
    await delay(5000);
    setDenyPopup(true);
    setDeletePopup(true);
  };
  let reportedIds = JSON.parse(localStorage.getItem("reportedCVs")) || [];
  const thisReport = reportedIds.filter((obj) => obj.id == row.id);

  const deleteHandler = () => {
    let deletedIds = JSON.parse(localStorage.getItem("deletedCVs")) || [];
    deletedIds.push(thisReport);
    localStorage.setItem("deletedCVs", JSON.stringify(deletedIds));
    reportedIds = reportedIds.filter((obj) => obj.id !== row.id);
    localStorage.setItem("reportedCVs", JSON.stringify(reportedIds));

    setTableData(tableData.filter((obj) => obj.id !== row.id));
    setDeletePopup(false);
    popupTimer();
    setDeletedReport(true);
  };
  const denyHandler = () => {
    const filteredReportedIds = reportedIds.filter((obj) => obj.id !== row.id);
    localStorage.setItem("reportedCVs", JSON.stringify(filteredReportedIds));
    setTableData(tableData.filter((obj) => obj.id !== row.id));
    setDenyPopup(false);
    popupTimer();
    setDeletedReport(true);
  };
  const el = row;
  let id = "r" + el.id;
  let reportId = "#a" + el.id;
  let github = "";
  let programming_languages = "";
  let Specializing = "";
  let softwares = "";
  let footerContent = (
    <button
      className={styles.reportButton}
      data-bs-toggle="modal"
      data-bs-target={reportId}
    >
      Report
    </button>
  );
  let adminReportDetails = "";
  if (forPage == "admin") {
    footerContent = (
      <div className={styles.adminFooter}>
        <button
          className={styles.denyButton}
          data-bs-dismiss="modal"
          onClick={denyHandler}
        >
          Deny Report
        </button>
        <button
          className={styles.deleteButton}
          data-bs-dismiss="modal"
          onClick={deleteHandler}
        >
          Delete CV
        </button>
      </div>
    );
    let reportDetails;
    if (!deletedReport) {
      reportDetails =
        thisReport[0].details.length > 1 ? thisReport[0].details : "";
    }

    adminReportDetails = (
      <div className={styles.reportDetailsComponent}>
        <h2>Report Details</h2>
        <p>{reportDetails}</p>
      </div>
    );
  }
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
    <>
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
              {adminReportDetails}
            </div>
            <div className="modal-footer">{footerContent}</div>
          </div>
        </div>
        <div
          id={deletePopup ? "hiddenPopup" : "visibleDeletePopup"}
          onClick={() => setDeletePopup(true)}
        >
          The CV Has Been Deleted.
        </div>
        <div
          id={denyPopup ? "hiddenPopup" : "visibleDenyPopup"}
          onClick={() => setDenyPopup(true)}
        >
          The Report Has Been Denied.
        </div>
      </div>
    </>
  );
};
export default FullCVModal;
