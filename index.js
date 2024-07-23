import express from "express";
import process from "process";
import { getAllSongs } from "./methods.js";
import { fullMusicList } from "./music_list.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send({ allSongs: getAllSongs() });
});

app.post("/song", (req, res) => {
  //refactor check for required fields to be more efficient
  if (!req.body.title) {
    return res.status(400).json({ message: "Song title is required" });
  }
  if (!req.body.artist) {
    return res.status(400).json({ message: "Artist name is required" });
  }
  if (!req.body.enteredBy) {
    return res
      .status(400)
      .json({ message: "Name of person making the entry is required" });
  }

  const newSong = {
    id: getAllSongs().length + 1,
    name: req.body.name,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
    duration: req.body.duration,
    enteredBy: req.body.enteredBy,
  };

  fullMusicList.push(newSong);

  res.status(201).send({
    message: `Song - ${req.body.title} by ${req.body.artist} - added successfully`,
    allSongs: getAllSongs(),
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
