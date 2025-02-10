"use client";
import React, { useEffect, useState } from "react";
import styles from "../../css/custom-theme.module.css";
export default function MainTable({ data }) {
  const [taskIndex, setTaskIndex] = useState(0);
  const [workplaceIndex, setWorkPlaceIndex] = useState(0);
  if (!data || data.length === 0) {
    return <p className="alert alert-danger">Det finns inga data att visa</p>;
  }

  console.log("DATA for UNIT i Main Table: ", data);
  console.log("Enhet", data.name);
  // const columnDefs = useMemo(
  //   () => [
  //     { headerName: "Enhet", field: "name" },
  //     { headerName: "Chef", field: "chef" },
  //     { headerName: "Specialister", field: "specialister" },
  //     { headerName: "Todo list", field: "tasks" },
  //     { headerName: "Arbetsplats", field: "workPlaces" },
  //   ],
  //   []
  // );

  const changeWorkPlaceIndex = () => {
    const interval = setInterval(() => {
      setWorkPlaceIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  };
  const changeTaskIndex = () => {
    const interval = setInterval(() => {
      setTaskIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  };
  useEffect(() => {
    changeTaskIndex();
    changeWorkPlaceIndex();
  }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setWorkPlaceIndex((prev) => prev + 1);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className={`table-responsive`}>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Enhet</th>
            <th scope="col">Chef</th>
            <th scope="col">Specialister</th>
            <th scope="col">Att göra</th>
            <th scope="col">Arbetsplats</th>
          </tr>
        </thead>
        <tbody>
          {data.map((unit) => (
            <tr key={unit._id}>
              <td>{unit.name}</td>
              <td>
                {unit.chefer ? unit.chefer.name : "Ingen chef till denna enhet"}
              </td>
              <td>
                {unit.specialister &&
                  unit.specialister
                    .map((specialist) => specialist.name)
                    .join(", ")}
              </td>
              <td>
                {unit.tasks.length > 0
                  ? unit.tasks[taskIndex % unit.tasks.length]?.title
                  : null}
              </td>
              <td>
                {unit.workplaces.length > 0
                  ? unit.workplaces[workplaceIndex % unit.workplaces.length]
                      ?.name
                  : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
