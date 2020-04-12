import P5 from "p5"

const colors = ["#F6C1E4", "#DFA7F1", "#B5E0ED", "#F8AFB5"]

export default class MicrobePart {
  // Size of the part (radius)
  private size: number
  // Position of the part
  private x: number
  private y: number
  // Noise idxs
  private xNoise: number
  private yNoise: number
  // Probability of moving towards each axis
  private xProb: number
  private yProb: number

  private bodyColor: P5.Color
  private shadowColor: P5.Color

  constructor(private p: P5) {
    this.size = p.random(20, 40)
    this.x = this.getInitPosition(p.width)
    this.y = this.getInitPosition(p.height)
    this.xNoise = p.random(0, 10000)
    this.yNoise = p.random(0, 10000)
    this.xProb = p.random(0.4, 0.54)
    this.yProb = p.random(0.4, 0.54)
    this.bodyColor = p.color(colors[Math.floor(p.random(0, colors.length))])
    this.shadowColor = p.lerpColor(p.color("#000"), this.bodyColor, 0.7)
  }

  step() {
    // Size decrements slower, the smaller it gets
    let decrement = this.p.random(0, this.size * 0.005)
    this.size -= decrement
    this.xNoise += 0.5
    this.yNoise += 0.5
    this.x += this.getDirection(this.xNoise, this.xProb) * this.p.random(0, 1.4)
    this.y += this.getDirection(this.yNoise, this.yProb) * this.p.random(0, 1.4)
  }

  draw() {
    if (this.size <= 0) return
    // The shadow
    this.p.fill(this.shadowColor)
    this.p.circle(this.x + this.xProb, this.y + this.yProb, this.size + 0.25)
    // The fill
    this.p.fill(this.bodyColor)
    this.p.circle(this.x, this.y, this.size)
    this.step()
  }

  // Gets the direction towards the part will move
  private getDirection(noiseIdx: number, prob: number) {
    const noise = this.p.noise(noiseIdx)
    return noise <= prob ? -1 : 1
  }

  // Gets start position within the bounds of the canvas
  private getInitPosition(maxPosition: number) {
    const center = maxPosition / 2
    return Math.min(
      maxPosition - 150,
      Math.max(150, this.p.random(center - 200, center + 200))
    )
  }
}
