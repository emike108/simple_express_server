const { fullMusicList } = require("./music_list");

function getAllSongs() {
  return fullMusicList;
}

module.exports = { getAllSongs };
