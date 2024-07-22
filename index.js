import express from "express";
import process from "process";
import { getAllSongs } from "./methods.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ allSongs: getAllSongs() });
});

// app.post("/song", (req, res) => {
//   if (!req.body.name) {
//     return res.status(400).json({ message: "Song name is required" });
//   }
//   if(!req.body.artist) {
//     return res.status(400).json({ message: "Artist name is required" });
//   }
//   res.status(201).send(`Song - ${req.body.name} by ${req.body.artist} - created successfully`);
// });

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
