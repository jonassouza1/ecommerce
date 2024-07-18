import database from "@/infra/database";

async function image(request, response) {
  const dates = await database.query(`SELECT * FROM image`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default image;
