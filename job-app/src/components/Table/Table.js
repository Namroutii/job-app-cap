import { useState, useEffect } from "react";
import useTable from "./UseTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import "./Table.css";
import { tab } from "@testing-library/user-event/dist/tab";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const { slice, range } = useTable(tableData, page, rowsPerPage);
  const [AllCitiesChecked, setAllCitiesChecked] = useState(true);
  const [Jerusalem, setJerusalem] = useState(AllCitiesChecked);
  const [Bethlehem, setBethlehem] = useState(AllCitiesChecked);
  const [Beit_Jala, setBeit_Jala] = useState(AllCitiesChecked);
  const [Beit_Sahour, setBeit_Sahour] = useState(AllCitiesChecked);
  const [Hebron, setHebron] = useState(AllCitiesChecked);
  const [Sabastia, setSabastia] = useState(AllCitiesChecked);
  const [Jericho, setJericho] = useState(AllCitiesChecked);
  const [Ramallah, setRamallah] = useState(AllCitiesChecked);
  const [Nablus, setNablus] = useState(AllCitiesChecked);
  const [Tulkarem, setTulkarem] = useState(AllCitiesChecked);
  const [Jenin, setJenin] = useState(AllCitiesChecked);
  const [Gaza, setGaza] = useState(AllCitiesChecked);
  const [Rafah, setRafah] = useState(AllCitiesChecked);
  const [Khan_Younis, setKhan_Younis] = useState(AllCitiesChecked);
  const [citiesForm, setCitiesForm] = useState(false);
  const [sortForm, setSortForm] = useState(false);
  const [AllPositions, setAllPosition] = useState(true);
  const [Designer, setDesigner] = useState(AllPositions);
  const [Developer, setDeveloper] = useState(AllPositions);
  const [Accountant, setAccountant] = useState(AllPositions);
  const [Leader, setLeader] = useState(AllPositions);
  const [Security, setSecurity] = useState(AllPositions);
  const [positionForm, setPositionForm] = useState(false);
  const [sortedBy, setSortedBy] = useState("");
  useEffect(() => {
    if (
      Jerusalem &&
      Bethlehem &&
      Beit_Jala &&
      Beit_Sahour &&
      Hebron &&
      Sabastia &&
      Jericho &&
      Ramallah &&
      Nablus &&
      Tulkarem &&
      Jenin &&
      Gaza &&
      Rafah &&
      Khan_Younis
    )
      setAllCitiesChecked(true);
    else setAllCitiesChecked(false);
    if (Designer && Developer && Accountant && Leader && Security)
      setAllPosition(true);
    else setAllPosition(false);
  });

  useEffect(() => {
    setTableData(data);
    let filteredData = [];
    data.map((row) => {
      if (row.city == "Jerusalem" && Jerusalem) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }

      if (row.city == "Bethlehem" && Bethlehem) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Beit Jala" && Beit_Jala) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Beit Sahour" && Beit_Sahour) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Hebron" && Hebron) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Sabastia" && Sabastia) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Jericho" && Jericho) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Ramallah & El-Bireh" && Ramallah) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Nablus" && Nablus) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Tulkarem" && Tulkarem) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Jenin" && Jenin) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Gaza" && Gaza) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Rafah" && Rafah) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
      if (row.city == "Khan Younis" && Khan_Younis) {
        if (row.position == "Designer" && Designer) filteredData.push(row);
        if (row.position == "Developer" && Developer) filteredData.push(row);
        if (row.position == "Accountant" && Accountant) filteredData.push(row);
        if (row.position == "Leader" && Leader) filteredData.push(row);
        if (row.position == "Security" && Security) filteredData.push(row);
      }
    });
    setTableData(filteredData);
  }, [
    Jerusalem,
    Bethlehem,
    Beit_Jala,
    Beit_Sahour,
    Hebron,
    Sabastia,
    Jericho,
    Ramallah,
    Nablus,
    Tulkarem,
    Jenin,
    Gaza,
    Rafah,
    Khan_Younis,
    Designer,
    Developer,
    Accountant,
    Leader,
    Security,
  ]);

  const refreshTable = async (event) => {
    setPage(page + 1);

    await delay(1);

    setPage(1);
  };
  console.log(tableData);
  useEffect(() => {
    const sortedField = sortedBy;
    switch (sortedField) {
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
            if (a.experience_years < b.experience_years) {
              return -1;
            }
          })
        );
        break;
      case "experienced":
        setTableData(
          tableData.sort((a, b) => {
            if (b.experience_years < a.experience_years) {
              return -1;
            }
          })
        );
        break;
      case "date":
        setTableData(
          tableData.sort((a, b) => {
            let adays = a.submittion_date.split("/");
            adays = adays[0] * 365 + adays[1] * 30 + adays[2];
            let bdays = b.submittion_date.split("/");
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
            let adays = a.submittion_date.split("/");
            adays = adays[0] * 365 + adays[1] * 30 + adays[2];
            let bdays = b.submittion_date.split("/");
            bdays = bdays[0] * 365 + bdays[1] * 30 + bdays[2];
            if (bdays < adays) {
              return -1;
            }
          })
        );
        break;
    }
    refreshTable();
  }, [tableData, sortedBy]);

  const cityCheck = (event) => {
    const check = event.target;
    switch (check.id) {
      case "Jerusalem":
        if (Jerusalem) {
          setJerusalem(false);
        } else {
          setJerusalem(true);
        }
        break;
      case "Bethlehem":
        if (Bethlehem) {
          setBethlehem(false);
        } else {
          setBethlehem(true);
        }
        break;

      case "Beit_Jala":
        if (Beit_Jala) {
          setBeit_Jala(false);
        } else {
          setBeit_Jala(true);
        }
        break;
      case "Beit_Sahour":
        if (Beit_Sahour) {
          setBeit_Sahour(false);
        } else {
          setBeit_Sahour(true);
        }
        break;
      case "Hebron":
        if (Hebron) {
          setHebron(false);
        } else {
          setHebron(true);
        }
        break;
      case "Sabastia":
        if (Sabastia) {
          setSabastia(false);
        } else {
          setSabastia(true);
        }
        break;
      case "Jericho":
        if (Jericho) {
          setJericho(false);
        } else {
          setJericho(true);
        }
        break;
      case "Ramallah":
        if (Ramallah) {
          setRamallah(false);
        } else {
          setRamallah(true);
        }
        break;
      case "Nablus":
        if (Nablus) {
          setNablus(false);
        } else {
          setNablus(true);
        }
        break;
      case "Tulkarem":
        if (Tulkarem) {
          setTulkarem(false);
        } else {
          setTulkarem(true);
        }
        break;
      case "Jenin":
        if (Jenin) {
          setJenin(false);
        } else {
          setJenin(true);
        }
        break;
      case "Gaza":
        if (Gaza) {
          setGaza(false);
        } else {
          setGaza(true);
        }
        break;
      case "Rafah":
        if (Rafah) {
          setRafah(false);
        } else {
          setRafah(true);
        }
        break;
      case "Khan_Younis":
        if (Khan_Younis) {
          setKhan_Younis(false);
        } else {
          setKhan_Younis(true);
        }
        break;
    }
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
      case "Developer":
        if (Developer) {
          setDeveloper(false);
        } else {
          setDeveloper(true);
        }
        break;

      case "Accountant":
        if (Accountant) {
          setAccountant(false);
        } else {
          setAccountant(true);
        }
        break;
      case "Leader":
        if (Leader) {
          setLeader(false);
        } else {
          setLeader(true);
        }
        break;
      case "Security":
        if (Security) {
          setSecurity(false);
        } else {
          setSecurity(true);
        }
        break;
    }
  };
  const clearFilters = () => {
    setAllCitiesChecked(true);
    setJerusalem(true);
    setBethlehem(true);
    setBeit_Jala(true);
    setBeit_Sahour(true);
    setHebron(true);
    setSabastia(true);
    setJericho(true);
    setRamallah(true);
    setNablus(true);
    setTulkarem(true);
    setJenin(true);
    setGaza(true);
    setRafah(true);
    setKhan_Younis(true);
    setAllPosition(true);
    setDesigner(true);
    setDeveloper(true);
    setAccountant(true);
    setLeader(true);
    setSecurity(true);
  };
  return (
    <div id={styles.mainContainer}>
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

              <input
                type="checkbox"
                id="allCities"
                onChange={(e) => {
                  if (AllCitiesChecked) {
                    setAllCitiesChecked(false);
                    setJerusalem(false);
                    setBethlehem(false);
                    setBeit_Jala(false);
                    setBeit_Sahour(false);
                    setHebron(false);
                    setSabastia(false);
                    setJericho(false);
                    setRamallah(false);
                    setNablus(false);
                    setTulkarem(false);
                    setJenin(false);
                    setGaza(false);
                    setRafah(false);
                    setKhan_Younis(false);
                  } else {
                    setAllCitiesChecked(true);
                    setJerusalem(true);
                    setBethlehem(true);
                    setBeit_Jala(true);
                    setBeit_Sahour(true);
                    setHebron(true);
                    setSabastia(true);
                    setJericho(true);
                    setRamallah(true);
                    setNablus(true);
                    setTulkarem(true);
                    setJenin(true);
                    setGaza(true);
                    setRafah(true);
                    setKhan_Younis(true);
                  }
                }}
                value="all"
                checked={AllCitiesChecked}
              />
              <label htmlFor="allCities"> All</label>

              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Jerusalem"
                  onChange={cityCheck}
                  value="Jerusalem"
                  checked={Jerusalem}
                />
                <label htmlFor="Jerusalem">Jerusalem</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Bethlehem"
                  onChange={cityCheck}
                  value="Bethlehem"
                  checked={Bethlehem}
                />
                <label htmlFor="Bethlehem">Bethlehem</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Beit_Jala"
                  onChange={cityCheck}
                  value="Beit_Jala"
                  checked={Beit_Jala}
                />
                <label htmlFor="Beit_Jala">Beit_Jala</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Beit_Sahour"
                  onChange={cityCheck}
                  value="Beit_Sahour"
                  checked={Beit_Sahour}
                />
                <label htmlFor="Beit_Sahour">Beit_Sahour</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Hebron"
                  onChange={cityCheck}
                  value="Hebron"
                  checked={Hebron}
                />
                <label htmlFor="Hebron">Hebron</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Sabastia"
                  onChange={cityCheck}
                  value="Sabastia"
                  checked={Sabastia}
                />
                <label htmlFor="Sabastia">Sabastia</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Jericho"
                  onChange={cityCheck}
                  value="Jericho"
                  checked={Jericho}
                />
                <label htmlFor="Jericho">Jericho</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Ramallah"
                  onChange={cityCheck}
                  value="Ramallah"
                  checked={Ramallah}
                />
                <label htmlFor="Ramallah">Ramallah</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Nablus"
                  onChange={cityCheck}
                  value="Nablus"
                  checked={Nablus}
                />
                <label htmlFor="Nablus">Nablus</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Tulkarem"
                  onChange={cityCheck}
                  value="Tulkarem"
                  checked={Tulkarem}
                />
                <label htmlFor="Tulkarem">Tulkarem</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Jenin"
                  onChange={cityCheck}
                  value="Jenin"
                  checked={Jenin}
                />
                <label htmlFor="Jenin">Jenin</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Gaza"
                  onChange={cityCheck}
                  value="Gaza"
                  checked={Gaza}
                />
                <label htmlFor="Gaza">Gaza</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Rafah"
                  onChange={cityCheck}
                  value="Rafah"
                  checked={Rafah}
                />
                <label htmlFor="Rafah">Rafah</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Khan_Younis"
                  onChange={cityCheck}
                  value="Khan_Younis"
                  checked={Khan_Younis}
                />
                <label htmlFor="Khan_Younis">Khan_Younis</label>
              </div>
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
                    setDeveloper(false);
                    setAccountant(false);
                    setLeader(false);
                    setSecurity(false);
                  } else {
                    setAllPosition(true);
                    setDesigner(true);
                    setDeveloper(true);
                    setAccountant(true);
                    setLeader(true);
                    setSecurity(true);
                  }
                }}
                value="all"
                checked={AllPositions}
              />
              <label htmlFor="allCities"> All</label>

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
                  id="Developer"
                  onChange={positionCheck}
                  value="Developer"
                  checked={Developer}
                />
                <label htmlFor="Developer">Developer</label>
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
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Leader"
                  onChange={positionCheck}
                  value="Leader"
                  checked={Leader}
                />
                <label htmlFor="Leader">Leader</label>
              </div>
              <div className={styles.cities}>
                <input
                  type="checkbox"
                  id="Security"
                  onChange={positionCheck}
                  value="Security"
                  checked={Security}
                />
                <label htmlFor="Security">Security</label>
              </div>
            </form>
          </div>
        </div>
      </div>
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
              {slice.map((el) => (
                <tr className="table-dark" key={el.id}>
                  <td className={styles.tableCell}>{el.name}</td>
                  <td className={styles.tableCell}>{el.age}</td>
                  <td className={styles.tableCell}>{el.city}</td>
                  <td className={styles.tableCell}>{el.position}</td>
                  <td className={styles.tableCell}>{el.experience_years}</td>
                  <td className={styles.tableCell}>{el.submittion_date}</td>
                  <td className={styles.tableCell}>
                    <p id={styles.moreInfo}>More info</p>
                  </td>
                </tr>
              ))}
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
