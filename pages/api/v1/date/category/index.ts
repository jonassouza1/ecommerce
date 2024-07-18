import database from "@/infra/database";

async function datesCategory(request, response) {
  const dates = await database.query(`SELECT * FROM category`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default datesCategory;
