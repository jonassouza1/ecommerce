import database from "@/infra/database";

async function information(request, response) {
  const dates = await database.query(`SELECT * FROM information`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default information;
