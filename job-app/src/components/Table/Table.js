import { useState } from "react";
import tableData1 from "./tableData1.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import "./Table.css";
import { useRef } from "react";

const Table = () => {
  const [tableData, setTableData] = useState(tableData1);

  const columns = [
    { label: "Full Name", accessor: "full_name", sortable: true },
    { label: "Age", accessor: "birth_date", sortable: true },
    { label: "Gender", accessor: "gender", sortable: false },
    { label: "Address", accessor: "address", sortable: false },
    { label: "Occupation", accessor: "occupation", sortable: false },
    {
      label: "Years of Experience",
      accessor: "years_of_experience",
      sortable: true,
    },
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
  const [name, setName] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [minAge, setMinAge] = useState([]);
  const [maxAge, setMaxAge] = useState([]);
  const min = useRef(null);
  const max = useRef(null);
  const [address, setAddress] = useState("");

  const searchValue = (event) => {
    setName(event.target.value);
  };
  const searchList = (event) => {
    setOccupation(event.target.value);
  };
  const limitAgeSetter = () => {
    setMinAge(min.current.value);
    setMaxAge(max.current.value);
  };
  const addressValue = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div id="table-filters">
      <div id="above-table" className="row">
        <input
          type="text"
          id="name-search"
          placeholder="Search for names.."
          onChange={searchValue}
          className="col-sm-4"
        />

        <div id="age-filter" className="col-sm-1">
          <input type="number" min="10" step="1" ref={min} />
          &#60; Age &#60;
          <input type="number" min="11" step="1" ref={max} />
          <div id="age-bottom">
            <p id="min-age-button">min</p>
            <div id="age-button" onClick={limitAgeSetter}>
              Search
            </div>
            <p id="max-age-button">max</p>
          </div>
        </div>
        <input
          type="text"
          id="address-search"
          placeholder="Search for address.."
          onChange={addressValue}
          className="col-sm-4"
        />
        <select
          name="Occupation"
          id="dropdown"
          onChange={searchList}
          className="col-sm-3"
        >
          <option value="all">All Occupations</option>
          <option value="designer">Designer</option>
          <option value="security">Security</option>
          <option value="development">Development</option>
          <option value="accounting">Accounting</option>
          <option value="ceo">CEO</option>
        </select>
      </div>
      <div id="table-container">
        <table className="table">
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody
            columns={columns}
            tableData={tableData}
            keyword={name}
            occ={Occupation}
            minAge={minAge}
            maxAge={maxAge}
            address={address}
          />
        </table>
      </div>
    </div>
  );
};
export default Table;
