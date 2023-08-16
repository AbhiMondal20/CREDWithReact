import React, { useEffect, useState } from "react";
import axios from "axios";

function Emp() {
  const [column, setColumn] = useState([]);
  const [recourds, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/paramount/appointment/admin/api").then((res) => {
      setColumn(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            {column.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recourds.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Emp;
