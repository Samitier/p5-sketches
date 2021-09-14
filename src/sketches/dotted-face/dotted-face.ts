import P5, { Image } from 'p5'

export default function (p: P5) {
  let size = 0
  const separation = 10
  let startX = 0
  let startY = 0

  const color = p.color('#FFEAD0')
  const bkgColor = p.color('#F76F8E')
  let image: Image

  p.preload = () => {
    image = p.loadImage('./images/face.jpg')
  }

  p.setup = () => {
    size = window.innerWidth < 640 ? 40 : 70
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.frameRate(60)
    p.background(bkgColor)
    p.noFill()

    startX = p.width / 2 - (separation * size) / 2
    startY = p.height / 2 - (separation * size) / 2
  }

  p.draw = () => {
    p.background(bkgColor)

    for (let x = 0; x < size; ++x) {
      for (let y = 0; y < size; ++y) {
        const imageX = p.lerp(0, image.width, x / size)
        const imageY = p.lerp(0, image.height, y / size)
        const [r, g, b] = image.get(imageX, imageY)
        const meanColor = (r + g + b) / 3

        color.setAlpha(p.random(100, 255))
        p.stroke(color)
        p.fill(color)
        const circleSize = p.lerp(
          p.sin(p.frameCount / 5) * 1,
          p.sin(p.frameCount / 10) * 3 + 7,
          meanColor / 255
        )
        p.circle(
          separation * x + startX,
          separation * y + startY,
          circleSize
        )
      }
    }
  }

  p.windowResized = () => p.setup()
}
