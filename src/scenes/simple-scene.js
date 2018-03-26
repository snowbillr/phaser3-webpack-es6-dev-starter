export class SimpleScene extends Phaser.Scene {
  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
  }
}