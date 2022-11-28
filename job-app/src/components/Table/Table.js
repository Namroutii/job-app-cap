import { useState } from "react";
import tableData1 from "./tableData1.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./Table.css";
const Table = () => {
  const [tableData, setTableData] = useState(tableData1);

  const columns = [
    { label: "Full Name", accessor: "full_name", sortable: true },
    { label: "Age", accessor: "birth_date", sortable: true },
    { label: "Gender", accessor: "gender", sortable: false },
    { label: "Address", accessor: "address", sortable: false },
    { label: "Specialty", accessor: "specialty", sortable: false },
    {
      label: "Years of Experience",
      accessor: "years_of_experience",
      sortable: true,
    },
    { label: "Email", accessor: "email", sortable: false },
    { label: "Submitted at", accessor: "submission_date", sortable: true },
    { label: "Action", accessor: "action", sortable: false },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };
  const [message, setMessage] = useState("");
  const searchValue = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div id="table-container">
      <input
        type="text"
        id="name-search"
        placeholder="Search for names.."
        onChange={searchValue}
      />
      <table className="table">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={tableData} keyword={message} />
      </table>
    </div>
  );
};
export default Table;
