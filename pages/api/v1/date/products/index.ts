import database from "@/infra/database";

import Cors from "cors";
import initMiddleware from "lib/init-middleware";

const cors = initMiddleware(
  Cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

async function products(request, response) {
  const dates = await database.query(`SELECT * FROM product`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default products;
