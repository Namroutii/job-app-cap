import { useState, useEffect } from "react";
import useTable from "./UseTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import "./Table.css";
import FullCVModal from "../FullCVModal/FullCVModal";
import TableFilter from "../TableFilter/TableFilter";
import ReportModal from "../ReportModal/ReportModal";
const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState(data);
  const { slice, range } = useTable(tableData, page, rowsPerPage);

  return (
    <div id={styles.mainContainer}>
      <TableFilter
        tableData={tableData}
        setTableData={setTableData}
        data={data}
        page={page}
        setPage={setPage}
      />
      <div className={styles.tableContainer}>
        <div id={styles.scrollDiv}>
          <table id={styles.table} className="table  table-striped">
            <thead className={styles.tableRowHeader}>
              <tr className="table-dark">
                <th className={styles.tableHeader}>Name</th>
                <th className={styles.tableHeader}>Age</th>
                <th className={styles.tableHeader}>City</th>
                <th className={styles.tableHeader}>Position</th>
                <th className={styles.tableHeader}>Experience Years</th>
                <th className={styles.tableHeader}>Submitted at</th>
                <th className={styles.tableHeader}></th>
              </tr>
            </thead>
            <tbody>
              {slice.map((el) => {
                let idH = "#r" + el.id;

                return (
                  <tr className="table-dark" key={el.id}>
                    <td className={styles.tableCell}>{el.name}</td>
                    <td className={styles.tableCell}>{el.age}</td>
                    <td className={styles.tableCell}>{el.city}</td>
                    <td className={styles.tableCell}>{el.position}</td>
                    <td className={styles.tableCell}>{el.experience}</td>
                    <td className={styles.tableCell}>{el.date}</td>
                    <td className={styles.tableCell}>
                      <button
                        type="button"
                        id={styles.moreInfo}
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={idH}
                      >
                        More Info
                      </button>
                      <ReportModal />

                      <FullCVModal row={el} />
                    </td>
                  </tr>
                );
              })}
              <tr id={styles.tableBottom}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <TableFooter
            range={range}
            slice={slice}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
