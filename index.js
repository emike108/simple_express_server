const { getAllSongs } = require("./methods");
const { requiredFields } = require("./routeUtils");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send({ allSongs: getAllSongs() });
});

app.post("/song", (req, res) => {
  for (const { field, message } of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).send({ message });
    }
  }
  const currentMusicList = getAllSongs();

  const newSong = {
    id: currentMusicList.length + 1,
    name: req.body.name,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
    duration: req.body.duration,
    enteredBy: req.body.enteredBy,
  };

  currentMusicList.push(newSong);

  res.status(201).send({
    message: `Song - ${req.body.title} by ${req.body.artist} - added successfully`,
    allSongs: currentMusicList,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
