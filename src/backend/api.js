const BASE_URL = "http://localhost:8000/api";

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

export const createUnit = async (unit) => {
  try {
    const res = await fetch(`${BASE_URL}/units`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: unit }),
    });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Can not create unit");
    return null;
  }
};

export const updateUnit = async (id,updatedUnit) => {
  try {
    const res = await fetch(`${BASE_URL}/units/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Updated Unit" }),
    });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    console.log("updated one is : ", data);
    return data;
  } catch (error) {
    console.error("We can not update this unit", error.message);
    return null;
  }
};

export const deleteUnit = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/units/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const data = await res.json();
    console.log("Deleted one is : ", data);
    return data;
  } catch (error) {
    console.error("We can not delete this unit", error.message);
    return null;
  }
};
