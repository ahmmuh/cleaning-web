import { getChef } from "@/app/lib/fetchData";
import MainCard from "@/components/mainCard";
import Link from "next/link";
import React from "react";

export default async function TaskPage({ params }) {
  const chef = await getChef(params.id);
  if (!chef.tasks)
    return (
      <div className="alert alert-danger">
        <p>Denna CHEF med ID {params.id} har ingen Task.</p>
      </div>
    );

  console.log("Chef med Tasks ", chef.tasks);
  return (
    <div className="row d-flex justify-content-center align-items-center align-content-center">
      <div className="col">
        Task Page
        {/* <MainCard title={chef.name}>
          <ul className="list-group">
            <li className="list-group-item">E-post: {chef.email}</li>
            <li className="list-group-item">Telefon: {chef.phone}</li>
          </ul>
          <Link className="mt-3 btn btn-outline-danger" href={`${chef._id}`}>
            Tillbaka
          </Link>
        </MainCard> */}
      </div>
    </div>
  );
}
