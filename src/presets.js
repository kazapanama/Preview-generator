import { renderBG,renderText } from "./singleElements";

// function createBox (layer) {
//     const box = new Konva.Rect({
//         x: 50,
//         y: 50,
//         width: 100,
//         height: 50,
//         fill: '#00D2FF',
//         stroke: 'black',
//         strokeWidth: 4,
//         draggable: true,
//       });
//       layer.add(box);
// }

export function createPreset1 (stage) {
  stage.destroyChildren()
  const bgLayer = new Konva.Layer();
  renderBG(1,bgLayer)
  stage.add(bgLayer)

  const textLayer = new Konva.Layer()
  renderText(textLayer,stage)
  stage.add(textLayer)


}

export function createPreset2 (stage) {
  stage.destroyChildren()
  const bgLayer = new Konva.Layer();
  stage.add(bgLayer)
  renderBG(2,bgLayer)


  const textLayer = new Konva.Layer()
  renderText(textLayer,stage)
  stage.add(textLayer)



}

export function createPreset3 (stage) {
  stage.destroyChildren()
  const bgLayer = new Konva.Layer();
  stage.add(bgLayer)
  renderBG(3,bgLayer)


  const textLayer = new Konva.Layer()
  renderText(textLayer,stage)
  stage.add(textLayer)
}

export function createPreset4 (stage) {
  stage.destroyChildren()
  const bgLayer = new Konva.Layer();
  stage.add(bgLayer)
  renderBG(4,bgLayer)


  const textLayer = new Konva.Layer()
  renderText(textLayer,stage)
  stage.add(textLayer)
}

export function createPreset5 (stage) {
  stage.destroyChildren()
  const bgLayer = new Konva.Layer();
  stage.add(bgLayer)
  renderBG(5,bgLayer)

  const textLayer = new Konva.Layer()
  renderText(textLayer,stage)
  stage.add(textLayer)
}

