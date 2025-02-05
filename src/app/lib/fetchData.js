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

export const getChef = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/units/chefer/${id}`,

      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!res.ok) {
      console.error(
        `Error: Chef med ID ${id} hittades inte. Status: ${res.status}`
      );
      return null; // Returnera null om chef inte hittas
    }
    const chef = await res.json();
    console.log("CHEF FROM BACKEND (getChef method", chef);
    return chef;
  } catch (error) {
    console.error("Fel vid hämtning av chef:", error.message);
    return null;
  }
};
