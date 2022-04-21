import { createStore } from '@stencil/store';
import { PlayerState } from './types';

export const store = () =>
  createStore<PlayerState>({
    isPlaying: false,
    src: '',
  });
