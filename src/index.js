import './styles.scss'
import Konva from "konva";
import { createPreset1, createPreset2, createPreset3, createPreset4, createPreset5 } from './presets';
import { setupStage, renderImage,renderText } from './singleElements';
import { fitStageIntoParentContainer,saveAsPng } from './controlls';



const stage = setupStage()


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


const save = document.querySelector('.save')

save.addEventListener('click', () => {

 saveAsPng(stage)

})


const addText = document.querySelector('.addText')


addText.addEventListener('click', () => {

  const textLayer = new Konva.Layer();
  stage.add(textLayer);

  renderText(textLayer,stage)
})



document.querySelector('[data-preset="1"]').addEventListener('click', () => createPreset1(stage))
document.querySelector('[data-preset="2"]').addEventListener('click', () => createPreset2(stage))
document.querySelector('[data-preset="3"]').addEventListener('click', () => createPreset3(stage))
document.querySelector('[data-preset="4"]').addEventListener('click', () => createPreset4(stage))
document.querySelector('[data-preset="5"]').addEventListener('click', () => createPreset5(stage))



document.querySelector('.reset').addEventListener('click', () => {
  stage.destroyChildren()
})