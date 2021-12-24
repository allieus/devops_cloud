import { useState } from 'react';
import ReactPlayer from 'react-player';
import songList from 'assets/song_list.json';
import './PagePlaylist.css';

function PagePlaylist() {
  const [videoUrl, setVideoUrl] = useState();

  // const showVideoPlayer = (videoUrl) => setVi

  return (
    <div>
      <h2>플레이 리스트</h2>

      <div className="player-wrap">
        <ul className="song-list">
          {songList.map((song) => (
            <div className="song" onClick={() => setVideoUrl(song.url)}>
              <img src={song.thumbnail_url} alt={song.title} />
              {song.title}
            </div>
          ))}
        </ul>
        <div className="song-player">
          {!videoUrl && '재생할 영상을 선택해주세요.'}
          {videoUrl && <ReactPlayer url={videoUrl} />}
        </div>
      </div>
    </div>
  );
}

export default PagePlaylist;
