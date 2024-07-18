import Cors from "cors";
import initMiddleware from "./init-middleware";

const cors = initMiddleware(
  Cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  }),
);

export default cors;
