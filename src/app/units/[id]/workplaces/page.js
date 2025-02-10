import { getWorkPlaces } from "@/app/lib/fetchData";
import React from "react";

export default async function WorkPlacePage({ params }) {
  const workplaces = await getWorkPlaces(params.id);
  if (!workplaces) {
    return (
      <div className="alert alert-danger">
        <p>Det finns inga workplaces till denna enhet</p>
      </div>
    );
  }
  console.log("workplaces", workplaces);
  return <div>Workplaces Page</div>;
}
