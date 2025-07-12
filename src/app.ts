import express from "express";

const app = express();
const port = 8000;

app.get("/users", (req, res) => {
  res.json("fasfadsf");
});
app.get("/product", (req, res) => {
  res.json("fasfadsf");
});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
