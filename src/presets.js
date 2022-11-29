import { renderBG,renderText } from "./singleElements";

// function createBox (layer) {
//     var box = new Konva.Rect({
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
  renderText(textLayer)
  stage.add(textLayer)


}

export function createPreset2 (stage) {
  stage.destroyChildren()
  var bgLayer = new Konva.Layer();
  stage.add(bgLayer)
  renderBG(2,bgLayer)


  const textLayer = new Konva.Layer()
  renderText(textLayer)
  stage.add(textLayer)



}

export function createPreset3 (stage) {
  var bgLayer = new Konva.Layer();
  stage.add(bgLayer)
  renderBG(3,bgLayer)
}

export function createPreset4 (stage) {
  var bgLayer = new Konva.Layer();
  stage.add(bgLayer)
  renderBG(4,bgLayer)
}

export function createPreset5 (stage) {
  var bgLayer = new Konva.Layer();
  stage.add(bgLayer)
  renderBG(5,bgLayer)
}

export function createPreset6 (stage) {
  var bgLayer = new Konva.Layer();
  stage.add(bgLayer)
  renderBG(6,bgLayer)
}