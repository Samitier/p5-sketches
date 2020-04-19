import P5 from "p5"

export default class Sky {
  constructor(private p: P5, private width: number, private height: number) {}

  render() {
    // Clip rect
    this.p.push()
    this.p.noStroke()
    this.p.rect(0, this.height / 2, this.width, this.height)
    this.p.pop()
    // Buildings
    let lastX = 0
    let lastY = this.height / 2
    this.p.beginShape()
    while (lastX < this.width) {
      let width1 = this.p.random(10, 80)
      let width2 = this.p.random(20, 100)
      let height1 = this.p.random(10, 200)
      let height2 = this.p.random(10, 200)
      if (lastX + width1 + width2 > this.width) {
        this.p.vertex(lastX, lastY)
        this.p.vertex(lastX, this.height / 2)
        this.p.vertex(this.width, this.height / 2)
        break
      }
      this.p.vertex(lastX, lastY)
      this.p.vertex(lastX + width1, lastY)
      const highY = Math.max(lastY - height1, 100)
      this.p.vertex(lastX + width1, highY)
      this.p.vertex(lastX + width1 + width2, highY)
      const lowY = Math.min(this.height / 2, highY + height2)
      this.p.vertex(lastX + width1 + width2, lowY)
      lastX = lastX + width1 + width2
      lastY = lowY
    }
    this.p.endShape()
  }
}
