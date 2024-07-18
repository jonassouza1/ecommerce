import database from "@/infra/database";

import Cors from "cors";
import initMiddleware from "lib/init-middleware";

const cors = initMiddleware(
  Cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

async function historic(request, response) {
  const dates = await database.query(`SELECT * FROM historic`);

  const result = await dates.rows;

  response.status(200).json({
    result,
  });
}

export default historic;
