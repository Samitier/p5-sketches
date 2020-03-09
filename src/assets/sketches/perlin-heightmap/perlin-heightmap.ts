import P5 from "p5"

export default function(p: P5) {
  const size = 45

  const planeWidth = 12
  const planeHeight = 12

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL)
    p.frameRate(9)
    p.stroke(119, 150, 203)
  }

  p.windowResized = () => p.resizeCanvas(window.innerWidth, window.innerHeight)

  p.draw = () => {
    p.camera(0, 150, 200, 0, 0, 0, 0, 1, 0)
    p.background(255)
    for (let i = -planeWidth / 2; i < planeWidth / 2; ++i) {
      for (let j = -planeHeight / 2; j < planeHeight / 2; ++j) {
        p.beginShape()
        p.vertex(i * size, j * size, p.noise(i + 10, j, p.frameCount * 0.04) * 50)
        p.vertex(i * size + size, j * size, p.noise(i + 11, j, p.frameCount * 0.04) * 50)
        p.vertex(
          i * size + size,
          j * size + size,
          p.noise(i + 11, j + 1, p.frameCount * 0.04) * 50
        )
        p.vertex(
          i * size,
          j * size + size,
          p.noise(i + 10, j + 1, p.frameCount * 0.04) * 50
        )
        p.endShape(p.CLOSE)
      }
    }
  }
}
