import P5 from "p5"

export default class Sky {
  bkgColor1: P5.Color
  bkgColor2: P5.Color
  starCount = 400

  constructor(private p: P5, private width: number, private height: number) {
    this.bkgColor1 = p.color("#2B3A4C")
    this.bkgColor2 = p.color("#51777D")
  }

  render() {
    this.renderBkgGradient()
    this.renderClouds()
    this.renderStars()
  }

  private renderBkgGradient() {
    this.p.noFill()
    for (let y = 0; y <= this.height; y++) {
      const c = this.p.lerpColor(this.bkgColor1, this.bkgColor2, y / this.height)
      this.p.stroke(c)
      this.p.line(0, y, this.width, y)
    }
  }

  private renderClouds() {
    const graphics = this.p.createGraphics(100, 100)
    let cloudColor = this.p.color("#FFF")
    let startX = this.p.random(0, 10000)
    let startY = this.p.random(0, 10000)
    for (let x = 0; x < graphics.width; ++x) {
      for (let y = 0; y < graphics.height; ++y) {
        cloudColor.setAlpha(this.p.noise((x + startX) / 30, (y + startY) / 30) * 255)
        graphics.stroke(cloudColor)
        graphics.circle(x, y, 0.5)
      }
    }
    this.p.tint(0, 0, 0, this.p.random(150, 200))
    this.p.image(graphics, 0, 0, this.width + 2, this.height + 3)
  }

  private renderStars() {
    this.p.fill("#FFF")
    for (let i = 0; i < this.starCount; ++i) {
      this.p.circle(
        this.p.random(0, this.width),
        this.p.random(0, this.height),
        this.p.random(0.2, 2)
      )
    }
  }
}
