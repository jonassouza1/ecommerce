import database from "@/infra/database";

async function payment(request, response) {
  const dates = await database.query(`SELECT * FROM payment`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default payment;
