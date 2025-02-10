import { getChef } from "@/app/lib/fetchData";
import { BASE_URL } from "@/backend/api";
import MainCard from "@/components/mainCard";
import Link from "next/link";
import React from "react";

export default async function ChefPage({ params }) {
  const chef = await getChef(params.id);
  if (!chef)
    return (
      <div className="alert alert-danger">
        <p>Denna enhet med ID {params.id} har ingen CHEF.</p>
      </div>
    );

  return (
    <div className="row d-flex justify-content-center align-items-center align-content-center">
      <div className="col">
        <MainCard title={chef.name}>
          <ul className="list-group">
            <li className="list-group-item">E-post: {chef.email}</li>
            <li className="list-group-item">Telefon: {chef.phone}</li>
          </ul>
          <Link className="mt-3 btn btn-outline-danger" href={`${chef._id}`}>
            Tillbaka
          </Link>
        </MainCard>
      </div>
    </div>
  );
}
