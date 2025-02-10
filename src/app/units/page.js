import MainCard from "@/components/mainCard";
import {
  getChef,
  getSpecialister,
  getTasks,
  getUnits,
  getWorkPlaces,
} from "../lib/fetchData";
import Link from "next/link";
import MainTable from "@/client-components/tables/main-table";

export default async function UnitPage() {
  const data = await getUnits();

  //Hämta alla data
  const unitWithData = await Promise.all(
    data.map(async (unit) => {
      const chefer = await getChef(unit._id);
      const specialister = await getSpecialister(unit._id);
      const tasks = await getTasks(unit._id);
      const workplaces = await getWorkPlaces(unit._id);
      console.log("Work Places: ", workplaces);

      return {
        ...unit,
        chefer,
        specialister,
        tasks,
        workplaces,
      };
    })
  );
  return <div>{<MainTable data={unitWithData} />}</div>;
}
