import { fullMusicList } from "./music_list.js";

export function getAllSongs() {
  return JSON.stringify(fullMusicList);
}