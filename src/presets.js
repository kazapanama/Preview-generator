import { renderBG,renderText } from "./singleElements";
import { clearPreset,rearrangeStage } from "./controlls";
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
  
  
  clearPreset(stage)
  const bgLayer = new Konva.Layer({
    name:'bgLayer'
  });
  renderBG(1,bgLayer)
  stage.add(bgLayer)

  const textLayer = new Konva.Layer({
    name:'textLayer'
  })
  renderText(textLayer,stage)
  stage.add(textLayer)

  rearrangeStage(stage)
}

export function createPreset2 (stage) {
  clearPreset(stage)
  
  const bgLayer = new Konva.Layer({
    name:'bgLayer'
  });
  stage.add(bgLayer)
  renderBG(2,bgLayer)


  const textLayer = new Konva.Layer({
    name:'textLayer'
  })
  renderText(textLayer,stage)
  stage.add(textLayer)

  rearrangeStage(stage)

}

export function createPreset3 (stage) {
  clearPreset(stage)
  
  const bgLayer = new Konva.Layer({
    name:'bgLayer'
  });
  stage.add(bgLayer)
  renderBG(3,bgLayer)


  const textLayer = new Konva.Layer({
  name:'textLayer'})
  renderText(textLayer,stage)
  stage.add(textLayer)
  rearrangeStage(stage)
}

export function createPreset4 (stage) {
  clearPreset(stage)
  const bgLayer = new Konva.Layer({
    name:'bgLayer'
  });
  stage.add(bgLayer)
  renderBG(4,bgLayer)


  const textLayer = new Konva.Layer({
  name:'textLayer'})
  renderText(textLayer,stage)
  stage.add(textLayer)
  rearrangeStage(stage)
}

export function createPreset5 (stage) {
  clearPreset(stage)
  const bgLayer = new Konva.Layer({
    name:'bgLayer'
  });
  stage.add(bgLayer)
  renderBG(5,bgLayer)

  const textLayer = new Konva.Layer({
  name:'textLayer'})
  renderText(textLayer,stage)
  stage.add(textLayer)
  rearrangeStage(stage)
}

