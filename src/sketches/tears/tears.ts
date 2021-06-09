import P5 from 'p5'
import Tear from './tear'

export default function (p: P5) {
  let shape: P5.Geometry
  const tears = [new Tear(p)]

  p.preload = () => {
    shape = p.loadModel('/models/venus.obj', true)
  }

  p.setup = () => {
    p.smooth()
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL)
    p.frameRate(30)
  }

  p.windowResized = () =>
    p.resizeCanvas(window.innerWidth, window.innerHeight)

  p.draw = () => {
    p.push()
    p.rotateY(p.lerp(0, 0.06, p.mouseX / p.width))
    p.rotateX(p.lerp(0.06, 0, p.mouseY / p.height))
    p.push()
    p.ambientLight(255, 255, 255)
    p.background('#F871CE')
    p.scale(5)
    p.rotateZ(p.PI)
    p.rotateY(9.331)
    p.rotateX(p.lerp(0, 0.02, p.mouseY / p.height))
    p.translate(0, -70)
    p.ambientMaterial(255)
    p.model(shape)
    p.pop()
    for (let tear of tears) {
      tear.update()
      tear.render()
    }
    p.pop()

    if (p.random() < 0.02) tears.push(new Tear(p))
  }
}
