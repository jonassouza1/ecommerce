import database from "@/infra/database";

import cors from "@/lib/cors";

async function datesCategory(req, res) {
  await cors(req, res);

  const dates = await database.query(`SELECT * FROM category`);

  const result = await dates.rows;

  res.status(200).json({
    result,
  });
}

export default datesCategory;
