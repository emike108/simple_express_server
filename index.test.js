const request = require("supertest");
const { app } = require("./index");
const { getAllSongs } = require("./methods");
const { fullMusicList } = require("./music_list");

describe("Routes", () => {
  describe("GET routes", () => {
    it("should return all songs", async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
      expect(response.body.allSongs).toStrictEqual(fullMusicList);
    });
  });

  describe("POST routes", () => {
    it("should add a new song", async () => {
      const newSong = {
        title: "Test song",
        artist: "Test artist",
        album: "Test album",
        genre: "Test genre",
        duration: "Test duration",
        enteredBy: "Test user",
      };

      const response = await request(app).post("/song").send(newSong);

      const updatedMusicList = getAllSongs();
      const addedSong = updatedMusicList.find(
        (song) => song.title === newSong.title
      );

      expect(response.status).toBe(201);
      expect(response.body.message).toBe(
        `Song - ${newSong.title} by ${newSong.artist} - added successfully`
      );

      expect(addedSong).toStrictEqual({ id: 4, ...newSong });
    });

    it("should return an error if required title field is missing", async () => {
      const newSong = {
        title: undefined,
        artist: "Test artist",
        album: "Test album",
        genre: "Test genre",
        duration: "Test duration",
      };

      const response = await request(app).post("/song").send(newSong);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Song title is required");
    });

    it("should return an error if required artist field is missing", async () => {
      const newSong = {
        title: "Test song",
        artist: undefined,
        album: "Test album",
        genre: "Test genre",
        duration: "Test duration",
      };

      const response = await request(app).post("/song").send(newSong);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Artist name is required");
    });

    it("should return an error if required enteredBy field is missing", async () => {
      const newSong = {
        title: "Test song",
        artist: "Test artist",
        album: "Test album",
        genre: "Test genre",
        duration: "Test duration",
        enteredBy: undefined,
      };

      const response = await request(app).post("/song").send(newSong);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Name of person making the entry is required"
      );
    });
  });

  describe("PUT routes", () => {
    //create tests for PUT route firsts
    //then go back and create PUT route in index.js
  });
});
