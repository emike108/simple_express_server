const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const { getAllSongs } = require("./methods");

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send({ allSongs: getAllSongs() });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
