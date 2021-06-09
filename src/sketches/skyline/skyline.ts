import P5 from "p5"
import Sky from "./sky"
import Buildings from "./buildings"

export default function(p: P5) {
  let sky: Sky
  let buildings: Buildings
  const bkgColor = "#5B0B31"
  const strokeColor = "#F5F8AB"
  const bkgSize = window.innerWidth < 640 ? 300 : 700
  const buildingsSize = window.innerWidth < 640 ? 310 : 900
  const circleClipSize = window.innerWidth < 640 ? 100 : bkgSize * p.HALF_PI

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.frameRate(1)
    p.background(bkgColor)
  }

  p.windowResized = () => p.resizeCanvas(window.innerWidth, window.innerHeight)

  p.draw = () => {
    renderBackground()
    renderBuildings()
  }

  function renderBackground() {
    p.push()
    p.translate(p.width / 2 - bkgSize / 2, p.height / 2 - bkgSize / 2)
    sky = new Sky(p, bkgSize, bkgSize)
    sky.render()
    p.pop()
    p.noFill()
    // Add clipping circle
    p.stroke(bkgColor)
    p.strokeWeight(400)
    p.circle(p.width / 2, p.height / 2, circleClipSize)
    p.strokeWeight(1)
    p.stroke(strokeColor)
    p.circle(p.width / 2, p.height / 2, bkgSize)
  }

  function renderBuildings() {
    p.push()
    p.translate(p.width / 2 - buildingsSize / 2, p.height / 2 - buildingsSize / 3)
    p.fill(bkgColor)
    buildings = new Buildings(p, buildingsSize, buildingsSize)
    buildings.render()
    p.pop()
  }
}
