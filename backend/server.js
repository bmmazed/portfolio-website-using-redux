import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/portfolios/:id", (req, res) => {
  const portfolio = data.portfolios.find((x) => x._id === req.params.id);
  if (portfolio) {
    res.send(portfolio);
  } else {
    res.status(404).send({ message: "Portfolio not found" });
  }
});

app.get("/api/portfolios", (req, res) => {
  res.send(data.portfolios);
});
app.get("/api/skills", (req, res) => {
  res.send(data.skills);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
