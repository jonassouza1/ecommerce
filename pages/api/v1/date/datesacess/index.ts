import database from "@/infra/database";

async function datesAcess(request, response) {
  const dates = await database.query(`SELECT * FROM acessdates`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default datesAcess;
