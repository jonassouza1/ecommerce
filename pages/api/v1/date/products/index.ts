import database from "@/infra/database";

async function products(request, response) {
  const dates = await database.query(`SELECT * FROM product`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default products;
