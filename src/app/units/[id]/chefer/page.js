import { getChef } from "@/app/lib/fetchData";
import { notFound } from "next/navigation";
import React from "react";

export default async function ChefPage({ params }) {
  const { id } = params;
  console.log("CHEF ID", id);
  const chef = await getChef(id);
  if (!chef) return <p>Chef med ID {id} finns inte.</p>;

  return (
    <div className="row">
      <h4>Chef: {chef.name}</h4>
      <p>Chef Email {chef.email}</p>
    </div>
  );
}
