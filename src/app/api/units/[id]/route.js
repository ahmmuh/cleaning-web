export async function GET(req, { params }) {
  const { id } = params;
  try {
    const [
      unitRes,
      taskRes,
      cleanerRes,
      chefRes,
      workplaceRes,
      specialisterRes,
    ] = await Promise.all([
      fetch(`${process.env.BACKEND_API}/units/${id}`),
      fetch(`${process.env.BACKEND_API}/units/${id}/tasks`),
      fetch(`${process.env.BACKEND_API}/units/${id}/cleaners`),
      fetch(`${process.env.BACKEND_API}/units/${id}/chefer`),
      fetch(`${process.env.BACKEND_API}/units/${id}/workplaces`),
      fetch(`${process.env.BACKEND_API}/units/${id}/specialister`),
    ]);

    if (
      !unitRes.ok ||
      !taskRes.ok ||
      !cleanerRes.ok ||
      !chefRes.ok ||
      !workplaceRes.ok ||
      !specialisterRes.ok
    ) {
      throw new Error("Failed to fetch unit OR other resource");
    }

    const [units, chefer, cleaners, tasks, workplaces, specialister] =
      await Promise.all([
        unitRes.json(),
        taskRes.json(),
        cleanerRes.json(),
        chefRes.json(),
        workplaceRes.json(),
        specialisterRes.json(),
      ]);

    return Response.json({
      units,
      tasks,
      cleaners,
      chefer,
      workplaces,
      specialister,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
