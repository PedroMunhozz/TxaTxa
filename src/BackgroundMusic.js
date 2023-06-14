import React, { Component } from "react";

// Importe seu arquivo de áudio
import song from "./music.mp3";

class BackgroundMusic extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }

    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="music-container">
        <button
          style={{
            position: "fixed",
            top: "63%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "rgba(255, 255, 255)",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={this.playPause}
        >
          Clique aqui
        </button>
      </div>
    );
  }
}

export default BackgroundMusic;
