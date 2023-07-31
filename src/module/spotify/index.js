import Playlist from "./sections/Playlist";
import MostPlayed from "./sections/MostPlayed";

function Spotify() {
  const songs = [
    { id: 1, title: "Song 1", artist: "Artist 1", played: 3 },
    { id: 2, title: "Song 2", artist: "Artist 2", played: 5 },
    { id: 3, title: "Song 3", artist: "Artist 3", played: 1 },
  ];
  return (
    <>
      <Playlist songs={songs} />
      <MostPlayed songs={songs} />
    </>
  );
}

export default Spotify;
