import { getSpecialister } from "@/app/lib/fetchData";
import React from "react";

export default async function SpecialistPage({ params }) {
  const specialister = await getSpecialister(params.id);
  // console.log("Params i specialister page", params.id);
  if (!specialister) {
    return (
      <div className="alert alert-danger">
        <p>Denna enhet med ID {params.id} har ingen specialister.</p>
      </div>
    );
  }
  console.log("Kolla om params.id finns med ", params.id);
  // console.log("Specialister", specialister);
  return (
    <div className="container row">
      {specialister.map((sp) => (
        <tr className="mb-5">
          <td className="">{sp.name}</td>
          <td>{sp.email}</td>
          <td>{sp.phone}</td>
        </tr>
      ))}
    </div>
  );
}
