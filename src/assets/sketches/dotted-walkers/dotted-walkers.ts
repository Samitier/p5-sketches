import P5 from "p5"
import Walker from "./walker"

export default function Walkers(p: P5) {
  const walkers: Walker[] = []
  for (let i = 0; i < 100; ++i) walkers.push(new Walker())

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.frameRate(60)
    p.background(255)
    p.noStroke()
  }

  p.windowResized = () => p.resizeCanvas(window.innerWidth, window.innerHeight)

  p.draw = () => {
    if (p.frameCount > 300) p.frameRate(60 - (p.frameCount - 300))
    for (const walker of walkers) walker.draw(p)
  }
}
