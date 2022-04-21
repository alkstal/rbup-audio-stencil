import { Component, Host, h, Prop } from '@stencil/core';
import { PlayerCoordinator } from '../../lib/player-coordinator';

@Component({
  tag: 'audio-controls',
  styleUrl: 'audio-controls.css',
  shadow: true,
})
export class AudioControls {
  @Prop()
  playerCoordinator: PlayerCoordinator;

  private onButtonClick = () => {
    if (this.playerCoordinator.isPlaying) {
      this.playerCoordinator.stop();
    } else {
      this.playerCoordinator.play();
    }
  };

  render() {
    return (
      <Host>
        <button onClick={this.onButtonClick}>{this.playerCoordinator.isPlaying ? 'Stop' : 'Play'}</button>
      </Host>
    );
  }
}
