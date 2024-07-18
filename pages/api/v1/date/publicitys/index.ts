import database from "@/infra/database";

async function publicity(request, response) {
  const dates = await database.query(`SELECT * FROM publicity`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default publicity;
