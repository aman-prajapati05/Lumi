import express from "express";
const app = express();
app.use(express.json());
import cors from "cors";
app.use(cors());
import api from "./routes/api.js";

app.use("/api", api);
app.get("/", (req, res) => {
  res.redirect("https://lumiai.vercel.app/");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
