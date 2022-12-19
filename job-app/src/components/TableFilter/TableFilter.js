import styles from "./TableFilter.module.css";
import { useState, useEffect } from "react";
import data from "../../data/CVsData";
import "./TableFilter.css";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TableFilter = (props) => {
  const tableData = props.tableData;
  const setTableData = props.setTableData;
  const page = props.page;
  const setPage = props.setPage;
  const [Cities, setCities] = useState({
    Jerusalem: true,
    Jerusalem: true,
    Bethlehem: true,
    Beit_Jala: true,
    Beit_Sahour: true,
    Hebron: true,
    Sabastia: true,
    Jericho: true,
    Ramallah: true,
    Nablus: true,
    Tulkarem: true,
    Jenin: true,
    Gaza: true,
    Rafah: true,
    Khan_Younis: true,
  });
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [citiesForm, setCitiesForm] = useState(false);
  const [sortForm, setSortForm] = useState(false);
  const [AllPositions, setAllPosition] = useState(true);
  const [Designer, setDesigner] = useState(AllPositions);
  const [IT, setIT] = useState(AllPositions);
  const [Accountant, setAccountant] = useState(AllPositions);
  const [positionForm, setPositionForm] = useState(false);
  const [sortedBy, setSortedBy] = useState("");
  const entries = Object.entries(Cities);
  const refreshTable = async () => {
    setPage(page + 1);

    await delay(1);

    setPage(1);
  };

  useEffect(() => {
    setTableData(data);
    let filteredData = [];
    data.map((row) => {
      let cFlag = false;
      let rFlag = false;
      for (const key in Cities) {
        if (Cities[row.city]) {
          cFlag = true;
        }
        break;
      }
      if (row.position == "Designer" && Designer) rFlag = true;
      if (row.position == "IT" && IT) rFlag = true;
      if (row.position == "Accountant" && Accountant) rFlag = true;
      if (rFlag && cFlag) filteredData.push(row);
    });
    setTableData(filteredData);
  }, [Cities, Designer, IT, Accountant]);

  useEffect(() => {
    switch (sortedBy) {
      case "name":
        setTableData(
          tableData.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
          })
        );
        break;
      case "named":
        setTableData(
          tableData.sort((a, b) => {
            if (b.name < a.name) {
              return -1;
            }
          })
        );
        break;
      case "age":
        setTableData(
          tableData.sort((a, b) => {
            if (a.age < b.age) {
              return -1;
            }
          })
        );
        break;
      case "aged":
        setTableData(
          tableData.sort((a, b) => {
            if (b.age < a.age) {
              return -1;
            }
          })
        );
        break;
      case "experience":
        setTableData(
          tableData.sort((a, b) => {
            if (a.experience < b.experience) {
              return -1;
            }
          })
        );
        break;
      case "experienced":
        setTableData(
          tableData.sort((a, b) => {
            if (b.experience < a.experience) {
              return -1;
            }
          })
        );
        break;
      case "date":
        setTableData(
          tableData.sort((a, b) => {
            let adays = a.date.split("/");
            adays = adays[0] * 365 + adays[1] * 30 + adays[2];
            let bdays = b.date.split("/");
            bdays = bdays[0] * 365 + bdays[1] * 30 + bdays[2];

            if (adays < bdays) {
              return -1;
            }
          })
        );
        break;
      case "dated":
        setTableData(
          tableData.sort((a, b) => {
            let adays = a.date.split("/");
            adays = adays[0] * 365 + adays[1] * 30 + adays[2];
            let bdays = b.date.split("/");
            bdays = bdays[0] * 365 + bdays[1] * 30 + bdays[2];
            if (bdays < adays) {
              return -1;
            }
          })
        );
        break;
    }
  }, [tableData, sortedBy]);

  useEffect(() => {
    refreshTable();
  }, [sortedBy]);

  useEffect(() => {
    let flag = true;
    for (const key in Cities) {
      if (!Cities[key]) flag = false;
    }
    if (flag) setIsAllChecked(true);
    else setIsAllChecked(false);
    if (Designer && IT && Accountant) setAllPosition(true);
    else setAllPosition(false);
  }, [Cities, AllPositions]);
  const cityCheck = (event) => {
    setCities({ ...Cities, [event.target.id]: event.target.checked });
  };

  const positionCheck = (event) => {
    const check = event.target;
    switch (check.id) {
      case "Designer":
        if (Designer) {
          setDesigner(false);
        } else {
          setDesigner(true);
        }
        break;
      case "IT":
        if (IT) {
          setIT(false);
        } else {
          setIT(true);
        }
        break;

      case "Accountant":
        if (Accountant) {
          setAccountant(false);
        } else {
          setAccountant(true);
        }
        break;
    }
  };

  const clearFilters = () => {
    setCities({
      Jerusalem: true,
      Jerusalem: true,
      Bethlehem: true,
      Beit_Jala: true,
      Beit_Sahour: true,
      Hebron: true,
      Sabastia: true,
      Jericho: true,
      Ramallah: true,
      Nablus: true,
      Tulkarem: true,
      Jenin: true,
      Gaza: true,
      Rafah: true,
      Khan_Younis: true,
    });
    setDesigner(true);
    setIT(true);
    setAccountant(true);
  };
  return (
    <div id={styles.filters}>
      <div id={styles.filterHead}>
        <p>
          Filter Results
          <span id={styles.clearFilters} onClick={clearFilters}>
            Clear
          </span>
        </p>
        <p></p>
      </div>
      <div id={styles.filterBody}>
        <div className={styles.filterComponent}>
          <form
            id={styles.sortByForm}
            className={sortForm ? "openedSortList" : "closedList"}
          >
            <p
              className={styles.filterHeaders}
              onClick={() => {
                if (sortForm) {
                  setSortForm(false);
                } else {
                  setSortForm(true);
                }
              }}
            >
              Sort By
            </p>
            <input
              type="radio"
              name="sortBy"
              value="name"
              onChange={(e) => {
                setSortedBy(e.target.value);
              }}
            />
            <label>Name &#11165;</label>
            <br />
            <input
              type="radio"
              name="sortBy"
              value="named"
              onChange={(e) => {
                setSortedBy(e.target.value);
              }}
            />
            <label>Name &#11167;</label> <br />
            <input
              type="radio"
              name="sortBy"
              value="age"
              onChange={(e) => {
                setSortedBy(e.target.value);
              }}
            />
            <label>Age &#11165;</label> <br />
            <input
              type="radio"
              name="sortBy"
              value="aged"
              onChange={(e) => {
                setSortedBy(e.target.value);
              }}
            />
            <label>Age &#11167;</label> <br />
            <input
              type="radio"
              name="sortBy"
              value="experience"
              onChange={(e) => {
                setSortedBy(e.target.value);
              }}
            />
            <label>Experience &#11165;</label> <br />
            <input
              type="radio"
              name="sortBy"
              value="experienced"
              onChange={(e) => {
                setSortedBy(e.target.value);
              }}
            />
            <label>Experience &#11167;</label> <br />
            <input
              type="radio"
              name="sortBy"
              value="date"
              onChange={(e) => {
                setSortedBy(e.target.value);
              }}
            />
            <label>Date &#11165;</label> <br />
            <input
              type="radio"
              name="sortBy"
              value="dated"
              onChange={(e) => {
                setSortedBy(e.target.value);
              }}
            />
            <label>Date &#11167;</label>
          </form>
        </div>
        <div className={styles.filterComponent}>
          <form
            id={styles.citiesForm}
            className={citiesForm ? "openedCityList" : "closedList"}
          >
            <p
              className={styles.filterHeaders}
              onClick={() => {
                if (citiesForm) setCitiesForm(false);
                else setCitiesForm(true);
              }}
            >
              Cities
            </p>
            <div className={styles.cities}>
              <input
                type="checkbox"
                id="AllCities"
                onChange={() => {
                  const check = !isAllChecked;
                  setCities({
                    Jerusalem: check,
                    Jerusalem: check,
                    Bethlehem: check,
                    Beit_Jala: check,
                    Beit_Sahour: check,
                    Hebron: check,
                    Sabastia: check,
                    Jericho: check,
                    Ramallah: check,
                    Nablus: check,
                    Tulkarem: check,
                    Jenin: check,
                    Gaza: check,
                    Rafah: check,
                    Khan_Younis: check,
                  });
                }}
                value="AllCities"
                checked={isAllChecked}
              />
              <label htmlFor="AllCities">All</label>
            </div>
            {entries.map(([key, value]) => {
              return (
                <div className={styles.cities} key={key}>
                  <input
                    type="checkbox"
                    id={key}
                    onChange={cityCheck}
                    value={key}
                    checked={value}
                  />
                  <label htmlFor={key}>{key}</label>
                </div>
              );
            })}
          </form>
        </div>
        <div className={styles.filterComponent}>
          <form
            id={styles.positionForm}
            className={positionForm ? "openedPositionList" : "closedList"}
          >
            <p
              className={styles.filterHeaders}
              onClick={() => {
                if (positionForm) setPositionForm(false);
                else setPositionForm(true);
              }}
            >
              Position
            </p>

            <input
              type="checkbox"
              onChange={() => {
                if (AllPositions) {
                  setAllPosition(false);
                  setDesigner(false);
                  setIT(false);
                  setAccountant(false);
                } else {
                  setAllPosition(true);
                  setDesigner(true);
                  setIT(true);
                  setAccountant(true);
                }
              }}
              value="all"
              checked={AllPositions}
              id="allPositions"
            />
            <label htmlFor="allPositions"> All</label>

            <div className={styles.cities}>
              <input
                type="checkbox"
                id="Designer"
                onChange={positionCheck}
                value="Designer"
                checked={Designer}
              />
              <label htmlFor="Designer">Designer</label>
            </div>
            <div className={styles.cities}>
              <input
                type="checkbox"
                id="IT"
                onChange={positionCheck}
                value="IT"
                checked={IT}
              />
              <label htmlFor="IT">IT</label>
            </div>
            <div className={styles.cities}>
              <input
                type="checkbox"
                id="Accountant"
                onChange={positionCheck}
                value="Accountant"
                checked={Accountant}
              />
              <label htmlFor="Accountant">Accountant</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TableFilter;
