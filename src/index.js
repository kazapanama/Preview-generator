import './styles.scss'
import Konva from "konva";
import { createPreset1, createPreset2, createPreset3, createPreset4, createPreset5, createPreset6 } from './presets';
import { setupStage, renderImage,renderText } from './singleElements';

const stage = setupStage()





function fitStageIntoParentContainer() {
  var container = document.querySelector('#editor');

  if (container.offsetWidth < 800){
    console.log(container.offsetWidth)
    var sceneWidth = 800;
  var sceneHeight = 445;
  var scale = container.offsetWidth / sceneWidth;


  stage.width(sceneWidth * scale);
  stage.height(sceneHeight * scale);
 
  stage.scale({ x: scale, y: scale });
 
  }


}

fitStageIntoParentContainer();

window.addEventListener('resize', fitStageIntoParentContainer);



document.querySelector('.test').addEventListener('click',()=>console.log(stage.scale({x:0.8})))





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

  const transformers = stage.find('Transformer')


  for (let trans of transformers) {
    trans.hide()
  }


  const oldSize = stage.size();

 
 let VIRTUAL_WIDTH = 800
const pixelRatio = VIRTUAL_WIDTH / stage.width();

  


  var dataURL = stage.toDataURL({ pixelRatio });
  
  stage.size(oldSize);

  for (let trans of transformers) {
    trans.show()
  }


  var link = document.createElement('a');
  link.download = 'azaza.png';
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

})


const addText = document.querySelector('.addText')


addText.addEventListener('click', () => {

  const textLayer = new Konva.Layer();
  stage.add(textLayer);

  renderText(textLayer)
})



document.querySelector('[data-preset="1"]').addEventListener('click', () => createPreset1(stage))
document.querySelector('[data-preset="2"]').addEventListener('click', () => createPreset2(stage))
document.querySelector('[data-preset="3"]').addEventListener('click', () => createPreset3(stage))
document.querySelector('[data-preset="4"]').addEventListener('click', () => createPreset4(stage))
document.querySelector('[data-preset="5"]').addEventListener('click', () => createPreset5(stage))
document.querySelector('[data-preset="6"]').addEventListener('click', () => createPreset6(stage))


document.querySelector('.reset').addEventListener('click', () => {
  stage.destroyChildren()
})