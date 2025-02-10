import { BASE_URL } from "@/backend/api";

export const getUnits = async () => {
  try {
    const res = await fetch(`${BASE_URL}/units`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();

    return data;
  } catch (error) {
    if (error) console.error("ERR from backend API ", error.message);
    return null;
  }
};

export const getChef = async (unitId) => {
  try {
    const unitRes = await fetch(
      `${BASE_URL}/units/${unitId}`,

      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!unitRes.ok) {
      console.error(
        `Error: Enhet med ID ${unitId} hittades inte. Status: ${unitRes.status}`
      );
      return null; // Returnera null om chef inte hittas
    }
    const unit = await unitRes.json();
    // console.log("Unit med Tasks:", unit.tasks); // Kolla om `unit.tasks` har data
    // console.log("Unit med Workplaces:", unit.workPlaces); // Kolla om `unit.workPlaces` har data
    // console.log("Unit med Specialister:", unit.specialister); // Kolla om `unit.specialister` har data

    if (!unit.chef) {
      // console.warn(`Enhet med ${unit.name} har ingen chef kopplad`);
      return null;
    }
    // console.log("CHEF DETAILS: ", unit.chef);

    return unit.chef;
  } catch (error) {
    console.error("Fel vid hämtning av chef:", error.message);
    return null;
  }
};

export const getTasks = async (unitId) => {
  try {
    // tasks som tillhör den valda enheten
    const unitRes = await fetch(`${BASE_URL}/units/${unitId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!unitRes.ok) {
      console.error(
        `Denna enhet med ID ${unitId} finns inte, status: ${unitRes.status}`
      );
      return null;
    }

    const unit = await unitRes.json();
    // console.log("UNIT MED ALLA TASKS ", unit.tasks);
    if (!unit.tasks) {
      console.log(`Denna enhet med ID: ${unitId} har inga tasks`);
      return null;
    }
    // console.log("Unit med Tasks", unit);
    return unit.tasks;
  } catch (error) {
    console.error("Errror vid hämtning av tasks", error.message);
  }
};

export const getSpecialister = async (unitId) => {
  try {
    // SPECIALISTER som tillhör den valda enheten
    const unitRes = await fetch(`${BASE_URL}/units/${unitId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!unitRes.ok) {
      console.error(
        `Denna enhet med ID ${unitId} finns inte status: ${unitRes.status}`
      );
      return null;
    }

    const unit = await unitRes.json();
    // console.log("UNIT MED ALLA SPECIALISTER ", unit.specialister);
    if (!unit.specialister) {
      console.warn(`Felaktigt API-svar för specialister på enhet ${unitId}`);
      return null;
    }
    // console.log("Specialister", unit.specialister);
    return unit.specialister;
  } catch (error) {
    console.error("Errror vid hämtning av specialister", error.message);
  }
};

export const getWorkPlaces = async (unitId) => {
  try {
    // Work Places
    const unitRes = await fetch(`${BASE_URL}/units/${unitId}/workplaces`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!unitRes.ok) {
      console.error(
        `Denna enhet med ID ${unitId} finns inte, status: ${unitRes.status}`
      );
      return null;
    }
    const unit = await unitRes.json();
    // console.log("UNIT MED ALLA WORK PLACES: ", unit.workPlaces);
    if (!unit.workPlaces) {
      console.error(`Denna enhet med ${unitId} har inga WORK PLACES`);
      return null;
    }

    return unit.workPlaces;
  } catch (error) {
    console.error("Error VID HÄMDNING AV WORK PLACES", error.message);
  }
};
