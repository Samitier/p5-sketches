import P5 from "p5"

export default class Tear {

  position: P5.Vector
  size = 3
  rotation = 0
  sizeInc = Math.random()
  amplitude = 0
  period = 0

  constructor(private p: P5) {
    this.position = p.createVector(28, -75)
    this.sizeInc = p.random(0.01, 0.05)
  }

  render() {
    this.p.push()
    this.p.strokeWeight(0.5)
    this.p.translate(this.position.x, this.position.y, 100)
    this.p.rotateX(this.rotation)
    this.p.rotateY(this.rotation)
    this.p.rotateZ(this.rotation)
    this.p.box(this.size, this.size, this.size)
    this.p.pop()
  }

  update() {
    this.rotation = 0.01 * this.p.frameCount
    this.position.x += this.p.noise(this.position.y)
    this.position.y -= 1
    this.size += this.sizeInc

    // x = amplitude * cos( TWO_PI * frameCount/period)
  }
}