import P5 from "p5"
import MicrobePart from "./microbe-part"

export default function(p: P5) {
  const parts: MicrobePart[] = []

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    for (let i = 0; i < 130; ++i) parts.push(new MicrobePart(p))
    p.frameRate(60)
    p.background("#C7F0DE")
    p.noStroke()
  }

  p.windowResized = () => p.resizeCanvas(window.innerWidth, window.innerHeight)

  p.draw = () => {
    for (let i = 0; i < 3; ++i) for (const part of parts) part.draw()
  }
}
