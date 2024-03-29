const TableBody = ({
  tableData,
  columns,
  keyword,
  occ,
  minAge,
  maxAge,
  address,
  gender,
}) => {
  const options = (event) => {
    if (event.target.value == "display") {
      alert("display CV");
    } else if (event.target.value == "report") {
      alert("reported");
    }
    event.target.value = "";
  };
  return (
    <tbody>
      {tableData.map((data) => {
        if (data["full_name"].toUpperCase().includes(keyword.toUpperCase()))
          if (
            data["position"].toLowerCase() == occ ||
            occ == "all" ||
            occ == ""
          ) {
            let date = new Date();
            let age = date.getFullYear() - data["birth_date"].slice(0, 4);
            if (
              (age > minAge || minAge == "") &&
              (age < maxAge || maxAge == "")
            )
              if (data["address"].toUpperCase().includes(address.toUpperCase()))
                if (
                  data["gender"].toLowerCase() == gender ||
                  gender == "all" ||
                  gender == ""
                )
                  return (
                    <tr key={data.id}>
                      {columns.map(({ accessor }) => {
                        let tData = data[accessor] ? data[accessor] : "——";
                        tData =
                          accessor == "years_of_experience"
                            ? data[accessor]
                            : tData;
                        if (accessor == "action")
                          return (
                            <td key={accessor} className={accessor}>
                              <select
                                name="options"
                                id="options-button"
                                onChange={options}
                              >
                                <option id="invisible-option"></option>
                                <option value="display">
                                  Display the Full CV
                                </option>
                                <option id="report" value="report">
                                  Report
                                </option>
                              </select>
                            </td>
                          );
                        if (accessor == "birth_date") {
                          let date = new Date();
                          let age = date.getFullYear() - tData.slice(0, 4);
                          const ar = tData.split("/");
                          const days = ar[0] * 30 * 12 + ar[1] * 30 + ar[2];
                          return (
                            <td key={accessor} className={accessor}>
                              <span id="days">{days}</span>
                              {age}
                            </td>
                          );
                        }
                        if (accessor == "submission_date") {
                          const ar = tData.split("/");
                          const days = ar[0] * 30 * 12 + ar[1] * 30 + ar[2];
                          return (
                            <td key={accessor} className={accessor}>
                              <span id="days">{days}</span>
                              {tData}
                            </td>
                          );
                        }
                        return (
                          <td key={accessor} className={accessor}>
                            {tData}
                          </td>
                        );
                      })}
                    </tr>
                  );
          }
      })}
    </tbody>
  );
};

export default TableBody;
