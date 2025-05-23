class AudioSystem {
  private _volume: number;
  public get volume(): number {
    return this._volume;
  }

  public set volume(value: number) {
    this._volume = value;
  }
  constructor() {}

  start() {
    console.log("audio is on now ");
  }
}

class VideoPlayer {
  play() {
    console.log("video is start playing");
  }
}

class ScreenSystem {
  show() {
    console.log("sceen is showing video");
  }
}

class HomeTheaterFacade {
  private _audioPlayer: AudioSystem;
  private _videoPlayer: VideoPlayer;
  private _screen: ScreenSystem;

  constructor(audioPlayer: AudioSystem, videoPlayer: VideoPlayer, screen: ScreenSystem) {
    this._audioPlayer = audioPlayer;
    this._videoPlayer = videoPlayer;
    this._screen = screen;
  }

  public on() {
    this._videoPlayer.play();
    this._audioPlayer.start();
    this._screen.show();
  }
}

const soundBar = new AudioSystem();
const sonyPlayer = new VideoPlayer();
const tv = new ScreenSystem();
const homeTv = new HomeTheaterFacade(soundBar, sonyPlayer, tv);

homeTv.on();
