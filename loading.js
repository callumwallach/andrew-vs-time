class Loading {
  constructor(game) {
    this.game = game;
    this.fontSize = 40;
    this.fontFamily = "Creepster";
  }
  update() {}
  draw(context) {
    const gw = this.game.width;
    const gh = this.game.height;
    context.save();
    context.fillStyle = "rgba(255,255,255,.15)";
    context.fillRect(0, 0, gw, gh);
    context.shadowOffsetX = 4;
    context.shadowOffsetY = 4;
    context.shadowColor = "white";
    context.shadowBlur = 0;
    context.fillStyle = this.game.fontColor;
    context.textAlign = "center";
    context.font = `${this.fontSize * 2}px ${this.fontFamily}`;
    const heading = `Andrew vs Father Time`;
    const message1 = `As Andrew approaches his 50th the Grim Reaper offers a choice!!`;
    const message2 = `Face him and triumph and he will turn back the clock!`;
    context.fillText(heading, gw * 0.5, gh * 0.5 - 20);
    context.font = `${this.fontSize * 0.75}px ${this.fontFamily}`;
    context.fillText(message1, gw * 0.5, gh * 0.5 + 25);
    context.fillText(message2, gw * 0.5, gh * 0.5 + 70);
    context.restore();
  }
}

export default Loading;
