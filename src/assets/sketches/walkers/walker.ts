import P5 from "p5"

const colors = [
  [85, 5, 39],
  [104, 142, 38],
  [250, 166, 19],
  [244, 71, 8],
  [161, 7, 2]
]

export default class Walker {
  private size: number
  private x: number
  private y: number

  constructor() {
    this.size = 8
    this.x = this.getRandomPosition(window.innerWidth)
    this.y = this.getRandomPosition(window.innerHeight)
  }

  step() {
    const option = Math.floor(Math.random() * 4)
    switch (option) {
      case 0:
        return (this.x += this.size)
      case 1:
        return (this.x -= this.size)
      case 2:
        return (this.y += this.size)
      case 3:
        return (this.y -= this.size)
    }
  }

  draw(p: P5) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    p.fill(color[0], color[1], color[2])
    p.rect(this.x, this.y, this.size / 2, this.size / 2)
    this.step()
  }

  getRandomPosition(s: number) {
    const p = Math.floor(Math.random() * s)
    return p - (p % this.size)
  }
}
