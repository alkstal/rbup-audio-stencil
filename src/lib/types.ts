export enum PlaybackSpeed {
  default = 'normal',
  medium = '1.5',
  fast = '2.0',
}

export type PlayerOptions = {
  playbackSpeed: PlaybackSpeed;
  src: string;
  volume: number;
};

export type PlayerState = {
  isPlaying: boolean;
  src: string;
};
