// import './styles.scss'
import Konva from "konva";
import { createPreset1, createPreset2, createPreset3, createPreset4, createPreset5 } from './presets';
import { setupStage, renderImage,renderText,renderTextWithBg } from './singleElements';
import { fitStageIntoParentContainer,saveAsPng,clearFullStage,recolorElements, } from './controlls';


Konva.hitOnDragEnabled = true;
const stage = setupStage()

// for future color manipulations
stage.theme = '#46A8EF'



fitStageIntoParentContainer(stage);
window.addEventListener('resize',()=> fitStageIntoParentContainer(stage));



document.querySelector('input[type=file]').addEventListener('change', (e) => {
  renderImage(e, stage)
})



document.querySelector('.save').addEventListener('click', () => saveAsPng(stage))


document.querySelector('.addText').addEventListener('click', () => {
  const textLayer = new Konva.Layer({
    name:'customText'
  });
  stage.add(textLayer);
  renderText(textLayer,stage)
})


document.querySelector('.addTextWithBg').addEventListener('click', () => {

  const textLayer = new Konva.Layer({
    name:'customText'
  });
  stage.add(textLayer);
  renderTextWithBg(textLayer,stage)
})




document.querySelector('[data-preset="1"]').addEventListener('click', () => createPreset1(stage))
document.querySelector('[data-preset="2"]').addEventListener('click', () => createPreset2(stage))
document.querySelector('[data-preset="3"]').addEventListener('click', () => createPreset3(stage))
document.querySelector('[data-preset="4"]').addEventListener('click', () => createPreset4(stage))
document.querySelector('[data-preset="5"]').addEventListener('click', () => createPreset5(stage))


//DUMMY COLORS FOR NOW<
document.querySelector('.theme-blue').addEventListener('click', () => {
  stage.theme = 'blue'
  recolorElements(stage)
})

document.querySelector('.theme-red').addEventListener('click', () => {
  stage.theme = 'red'
  recolorElements(stage)
})

document.querySelector('.theme-green').addEventListener('click', () => {
  stage.theme = 'green'
  recolorElements(stage)
})

document.querySelector('.theme-yellow').addEventListener('click', () => {
  stage.theme = 'yellow'
  recolorElements(stage)
})






document.querySelector('.reset').addEventListener('click', () => clearFullStage(stage))
document.querySelector('.test').addEventListener('click', () => {
  stage.theme = 'red';
  recolorElements(stage)
})



// initial render and deleting to fix font bug
createPreset1(stage)
clearFullStage(stage)
