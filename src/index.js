// import './styles.scss'
import Konva from "konva";
import { createPreset1, createPreset2, createPreset3, createPreset4, createPreset5 } from './presets';
import { setupStage, renderImage,renderText,renderTextWithBg } from './singleElements';
import { fitStageIntoParentContainer,saveAsPng,clearFullStage,clearStageWithoutImage } from './controlls';



const stage = setupStage()
stage.theme = 'red'

fitStageIntoParentContainer(stage);
window.addEventListener('resize',()=> fitStageIntoParentContainer(stage));



document.querySelector('input').addEventListener('change', (e) => {
  renderImage(e, stage)
})







// stage.on('click tap', function (e) {
//   // if click on empty area - remove all transformers
//   if (e.target === stage && lastEvent !== e.evt) {
//     // stage.find('Transformer').destroy();
//     layer.draw();
//     return;
//   }
// })


document.querySelector('.save').addEventListener('click', () => saveAsPng(stage))


document.querySelector('.addText').addEventListener('click', () => {
  const textLayer = new Konva.Layer();
  stage.add(textLayer);
  renderText(textLayer,stage)
})


document.querySelector('.addTextWithBg').addEventListener('click', () => {

  const textLayer = new Konva.Layer({
    name:'test'
  });
  stage.add(textLayer);
  renderTextWithBg(textLayer,stage)
})






document.querySelector('[data-preset="1"]').addEventListener('click', () => createPreset1(stage))
document.querySelector('[data-preset="2"]').addEventListener('click', () => createPreset2(stage))
document.querySelector('[data-preset="3"]').addEventListener('click', () => createPreset3(stage))
document.querySelector('[data-preset="4"]').addEventListener('click', () => createPreset4(stage))
document.querySelector('[data-preset="5"]').addEventListener('click', () => createPreset5(stage))



document.querySelector('.reset').addEventListener('click', () => clearFullStage(stage))



// document.querySelector('.test').addEventListener('click', () => {
//   console.log(stage.find('.textLayer')[0].removeChildren())
// })

createPreset1(stage)
// let a = document.querySelector('[data-preset="1"]')
clearFullStage(stage)
