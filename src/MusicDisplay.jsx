import React from 'react';

import NoCover from './no_cover.jpg';
import './MusicDisplay.css';

class MusicDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nowPlaying: false,
      songName: undefined,
      artist: undefined,
      imageUrl: undefined,
      pending: true,
    };
  }

  async componentDidMount() {
    const getMusicDetails = async () => {
      const response = await fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=drangob&api_key=90225bae78876a0c8dbfa35bf25e90b5&format=json");
      const jsonResponse = await response.json();
      const {artist, name, '@attr': attrib, image} = jsonResponse.recenttracks.track[0];
      if (attrib) {
        this.setState({
          nowPlaying: true,
          songName: name,
          artist: artist["#text"],
          imageUrl: image[image.length-1]["#text"],
        });
      } else {
        this.setState({nowPlaying: false});
      }
      this.setState({pending: false});
    }

    try {
      getMusicDetails();
      setInterval(getMusicDetails, 5000);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <div className="playing-info">
          {this.state.pending ? 
            <span>LOADING...</span> :
            this.state.nowPlaying ? 
              <span>Now playing:<br/>{this.state.songName} by {this.state.artist}</span>
              :
              <span>Not currently playing any music</span>
          }
        </div>
        <div className="cover-art">
          <img
            height={256}
            width={256}
            src={ (this.state.nowPlaying && this.state.imageUrl) || NoCover}
            alt="Album artwork"
          />
        </div>
      </div>
    );
  }
}

export default MusicDisplay;