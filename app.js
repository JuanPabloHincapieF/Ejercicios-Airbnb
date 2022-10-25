const express = require("express");
const db = require("./data/db");
const port = 3000;
const app = express();
app.use(express.json());

app.get("/punto1", async (req, res) => {
  const data = await db.getPoint1();
  res.send(data);
  console.log(data.length);
});

app.get("/punto2", async (req, res) => {
  const data = await db.getPoint2();
  res.send(data);
  console.log(data.length);
});

app.get("/punto3", async (req, res) => {
  const data = await db.getPoint3();
  res.send(data);
  console.log(data.length);
});
app.get("/punto4", async (req, res) => {
  const data = await db.getPoint4();
  res.send(data);
  console.log(data.length);
});
app.get("/punto5", async (req, res) => {
  const data = await db.getPoint5();
  res.send(data);
  console.log(data.length);
});
app.get("/punto6", async (req, res) => {
  const data = await db.getPoint6();
  res.send(data);
  console.log(data.length);
});
app.get("/punto7/:price", async (req, res) => {
  const price = req.params.price;
  const data = await db.filterPrice(price);
  res.send(data);
  console.log(data.length);
});

app.get("/punto7", async (req, res) => {
  const price = req.query.price;
  const data = await db.filterPrice(price);
  res.send(data);
  console.log(data.length);
});

app.post("/punto8", async (req, res) => {
  const price = String(req.body.price);
  const data = await db.filterPrice(price);
  res.send(data);
  console.log(data.length);
});

app.listen(port, () => {
  console.log(`El servidor esta activo en el puerto ${port}...`);
});
