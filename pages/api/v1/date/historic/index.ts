import database from "@/infra/database";

async function historic(request, response) {
  const dates = await database.query(`SELECT * FROM historic`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default historic;
