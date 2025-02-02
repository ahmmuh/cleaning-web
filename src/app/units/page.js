"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import unitStyles from "../../css/units.module.css";
import themeStyle from "../../css/custom-theme.module.css";
import MainCard from "@/components/mainCard";
import Link from "next/link";
import Loading from "@/components/loading";

function UnitPage() {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();
  console.log("QUERY Params IS: ", params);

  const id = params?.id;

  console.log("Extracted ID: ", id);

  useEffect(() => {
    async function fetchUnits() {
      try {
        console.log("Fetching:", `http://localhost:8000/api/units`);

        const response = await fetch(`http://localhost:8000/api/units`);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();

        console.log("BEFORE FETCHING CHILDREN OBJECTS FROM UNITS", data);

        const unitWithDetails = await Promise.all(
          data.map(async (unit) => {
            const [chefRes, sepecialistRes, taskRes, workPlacesRes] =
              await Promise.all([
                fetch(`http://localhost:8000/api/units/${unit._id}/chefer`),
                fetch(
                  `http://localhost:8000/api/units/${unit._id}/specialister`
                ),
                fetch(`http://localhost:8000/api/units/${unit._id}/tasks`),
                // fetch(`http://localhost:8000/api/units/${unit._id}/workplaces`),
              ]);

            const chefer = (await chefRes.ok) ? chefRes.json() : {};
            const specilister = (await sepecialistRes.ok)
              ? sepecialistRes.json()
              : [];
            const tasks = (await taskRes.ok) ? taskRes.json() : [];
            const workPlaces = (await workPlacesRes.ok)
              ? workPlacesRes.json()
              : [];

            return { ...unit, chefer, tasks, specilister, workPlaces };
          })
        );

        console.log("unitWithDetails", unitWithDetails);
        setUnits(unitWithDetails);
        console.log("Fresh Data:", data);

        setError(null);
      } catch (error) {
        console.log("Error:", error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUnits();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <div className="alert alert-danger">{error.message}</div>;

  return (
    <div className="container">
      {units ? (
        <div className="row borderStyle">
          {units.map((unit) => (
            <div key={unit._id} className="col-lg-6 mb-3">
              <MainCard title={unit.name}></MainCard>
            </div>
          ))}
        </div>
      ) : (
        <p>Ingen enhet hittades</p>
      )}
    </div>
  );
}

export default UnitPage;
