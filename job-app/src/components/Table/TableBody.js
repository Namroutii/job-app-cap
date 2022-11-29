const TableBody = ({ tableData, columns, keyword,occ }) => {
  console.log(occ)
  return (
    <tbody>
      {tableData.map((data) => {
        if ((data["full_name"].toUpperCase().includes(keyword.toUpperCase())))
          console.log(data["occupation"])
          if(data["occupation"].toLowerCase() == occ || occ == "all" || occ == "")
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                const tData = data[accessor] ? data[accessor] : "——";
                if (accessor == "action")
                  return (
                    <td key={accessor} className={accessor}>
                      <button></button>
                    </td>
                  );
                if (accessor == "birth_date") {
                  let date = new Date();
                  let age = date.getFullYear() - tData.slice(0,4);
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
      })}
    </tbody>
  );
};

export default TableBody;
