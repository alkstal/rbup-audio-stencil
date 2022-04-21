import { Component, h, Method, Prop } from '@stencil/core';
import { PlayerCoordinator } from '../../lib/player-coordinator';

@Component({
  tag: 'audio-core',
  styleUrl: 'audio-core.css',
  shadow: true,
})
export class AudioCore {
  @Prop()
  playerCoordinator: PlayerCoordinator;

  @Method()
  async play() {
    await this.audioElement.play();
  }

  @Method()
  async stop() {
    this.audioElement.pause();
  }

  audioElement: HTMLAudioElement;

  componentWillLoad() {
    this.playerCoordinator.audioCore = this;
  }

  render() {
    return <audio preload={'none'} ref={element => (this.audioElement = element)} src={this.playerCoordinator.src} controls />;
  }
}
