import { Component, Event, EventEmitter, h, Host, Method, Prop, Watch } from '@stencil/core';
import { PlayerOptions } from '../../lib/types';
import { PlayerCoordinator } from '../../lib/player-coordinator';

@Component({
  tag: 'rbup-audio',
  styleUrl: 'rbup-audio.css',
  shadow: true,
})
export class RbupAudio {
  playerCoordinator: PlayerCoordinator;

  constructor() {
    this.playerCoordinator = new PlayerCoordinator();
    if (this.src) {
      console.log(`[Player ${this.playerCoordinator.id}]`, 'Setting src');
      this.playerCoordinator.src = this.src;
    }
  }

  @Prop({ reflect: true })
  chromeless: boolean;

  @Watch('chromeless')
  onChromelessChanged(newValue: boolean) {
    console.log(`[Player ${this.playerCoordinator.id}]`, 'chromeless changed');
  }

  @Prop({ reflect: true })
  src: string;

  @Watch('src')
  onSrcChanged(newValue: string) {
    console.log(`[Player ${this.playerCoordinator.id}]`, 'src changed');
    this.playerCoordinator.src = newValue;
  }

  @Event() isPlayingChanged: EventEmitter<boolean>;

  @Method()
  async setup(options: PlayerOptions) {
    console.log(`[Player ${this.playerCoordinator.id}]`, 'Setup called');
    this.playerCoordinator.setup(options);
  }

  @Method()
  async play() {
    this.playerCoordinator.play();
    this.isPlayingChanged.emit(true);
  }

  @Method()
  async stop() {
    this.playerCoordinator.stop();
    this.isPlayingChanged.emit(false);
  }

  componentDidRender() {
    console.log(`[Player ${this.playerCoordinator.id}]`, 'Rendered');
  }

  render() {
    return (
      <Host>
        <audio-core playerCoordinator={this.playerCoordinator} />
        {!this.chromeless && <audio-controls playerCoordinator={this.playerCoordinator} />}
      </Host>
    );
  }
}
