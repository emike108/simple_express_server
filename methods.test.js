const { getAllSongs } = require("./methods");
const { fullMusicList } = require("./music_list");

describe("getAllSongs", () => {
  it("should return all songs", () => {
    expect(getAllSongs()).toStrictEqual(fullMusicList);
  });

  it("should return the default number of songs", () => {
    expect(getAllSongs().length).toEqual(fullMusicList.length);
  });
});
