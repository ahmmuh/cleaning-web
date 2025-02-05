import MainCard from "@/components/mainCard";
import { getUnits } from "../lib/fetchData";
import Link from "next/link";

export default async function UnitPage() {
  const data = await getUnits();

  console.log("UNITS ", data);
  console.log("Type of ", typeof data);

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre>. */}
      <div className="row justify-content-center  g-2">
        {data.map((unit) => (
          <div className="col-lg-6" key={unit._id}>
            <MainCard title={unit.name}>
              <div className="row">
                <div className="col">
                  <Link href={`units/${unit._id}`}>Mer</Link>
                </div>
                <div className="col">
                  <Link href={`units/${unit._id}/chefer`}>Chef</Link>
                </div>
                <div className="col">
                  <Link href={`units/${unit._id}/specialister`}>
                    Specialister
                  </Link>
                </div>
                <div className="col">
                  <Link href={`units/${unit._id}/tasks`}>Tasks</Link>
                </div>
              </div>
              <div className="col">
                <Link href={`units/${unit._id}/workplaces`}>Mina objekt</Link>
              </div>
            </MainCard>
          </div>
        ))}
      </div>
    </div>
  );
}
