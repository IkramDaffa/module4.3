import React from "react";
import { Container } from "reactstrap";

function MostPlayed(props) {
  const sortSongs = props.songs;
  sortSongs.sort((a, b) => b.played - a.played);
  console.log(sortSongs);
  return (
    <Container className="playlist">
      <div className="section">
        <h2>Most Played Songs</h2>
        <div className="songs-list">
          <ul className="songs-list">
            {sortSongs.map((song) => (
              <li className="song-item" key={song.id}>
                <div className="song-info">
                  <p>{song.title}</p>
                  <p>{song.artist}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default MostPlayed;
