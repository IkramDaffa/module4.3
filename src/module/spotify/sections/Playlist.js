import React from "react";
import { Container } from "reactstrap";

function Playlist(props) {
  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.parentElement.parentElement.style.display = "none";
  };

  return (
    <Container className="playlist d-flex flex-column">
      <h1>Simplified Spotify</h1>
      <div className="section">
        <h2>Playlist</h2>
        <div className="songs-list">
          <ul className="songs-list">
            {props.songs.map((song) => (
              <li
                className="song-item"
                key={song.id}
                onClick={() => alert(song.title)}
              >
                <div className="song-info">
                  <p>{song.title}</p>
                  <p>{song.artist}</p>
                  <button
                    className="btn btn-danger mb-3"
                    onClick={handleRemove}
                  >
                    remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Playlist;
