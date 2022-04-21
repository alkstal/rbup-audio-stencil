import { PlayerOptions, PlayerState } from './types';
import { store } from './state';
import { ObservableMap } from '@stencil/store';

export class PlayerCoordinator {
  private _audioCore?: HTMLAudioCoreElement;
  private _store: ObservableMap<PlayerState>;
  id: number;

  constructor() {
    this.id = Math.round(Math.random() * 100);
    console.log('PlayerCoordinator created', this.id);
    this._store = store();
  }

  set audioCore(value) {
    this._audioCore = value;
  }

  get isPlaying() {
    return this._store.state.isPlaying;
  }

  get src() {
    return this._store.state.src;
  }

  set src(value) {
    this._store.state.src = value;
  }

  // PlayerCoordinator can be used as a proxy for the store.
  setup(options: PlayerOptions) {
    this._store.state.src = options.src;
  }

  play() {
    void this._audioCore?.play();
    this._store.state.isPlaying = true;
  }

  stop() {
    void this._audioCore?.stop();
    this._store.state.isPlaying = false;
  }
}
