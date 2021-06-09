import P5 from "p5"

export default function Walkers(p: P5) {
  let size = window.innerWidth < 640 ? 30 : 70
  const separation = 10
  let startX = 0
  let startY = 0
  const fromColor = p.color("#D66AF4")
  const toColor = p.color("#E8C766")
  const bkgColor = p.color("#6CE3E0")

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.frameRate(30)
    p.background(bkgColor)
    p.noFill()

    startX = p.width / 2 - (separation * size) / 2
    startY = p.height / 2 - (separation * size) / 2
  }

  let x = 0
  p.draw = () => {
    if (x > size) x = 0
    const color = p.lerpColor(fromColor, toColor, x / size)
    color.setAlpha(50)
    p.stroke(color)
    for (let y = 0; y < size; ++y) {
      p.circle(separation * x + startX, separation * y + startY, 0.5)
      drawAt(x, y, !!(x % 2))
      // if (p.random() > .5) drawAtVertical(x, y, !!(y % 2))
      // else drawAt(x, y, !!(x % 2))
    }
    ++x
  }

  p.windowResized = () => p.resizeCanvas(window.innerWidth, window.innerHeight)

  function drawAt(x: number, y: number, isReversed: boolean) {
    p.arc(
      startX + (x + 0.5) * separation,
      startY + y * separation,
      separation,
      separation,
      isReversed ? 0 : p.PI,
      isReversed ? p.PI : 0
    )
  }

  function drawAtVertical(x: number, y: number, isReversed: boolean) {
    p.arc(
      startX + (x + 0.5) * separation,
      startY + y * separation,
      separation,
      separation,
      isReversed ? p.HALF_PI : p.HALF_PI + p.PI,
      isReversed ? p.HALF_PI + p.PI : p.HALF_PI
    )
  }
}
