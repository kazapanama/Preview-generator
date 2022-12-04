
import Konva from 'konva';
import {
  createPreset1,
  createPreset2,
  createPreset3,
  createPreset4,
  createPreset5,
  createPreset6,
  createPreset7,
  createPreset8,
  createPreset9,
} from './presets';
import {
  setupStage,
  renderImage,
  renderText,
  renderTextWithBg,
} from './singleElements';
import {
  fitStageIntoParentContainer,
  saveAsPng,
  clearFullStage,
  recolorElements,
  recolorText,
  setElementsOpacity,
} from './controlls';

Konva.hitOnDragEnabled = true;
const stage = setupStage();

const themeColors = {
  blue: '#46A8EF',
  darkBlue:'#1b0394',
  red: '#780707',
  green: '#02ad21',
  yellow: '#feb920',
  grey:'#494949',
  white: '#ffffff',
};

stage.theme = themeColors.blue;
stage.inverse = false

fitStageIntoParentContainer(stage);
window.addEventListener('resize', () => fitStageIntoParentContainer(stage));

document
  .querySelector('[data-preset="1"]')
  .addEventListener('click', () => createPreset1(stage));
document
  .querySelector('[data-preset="2"]')
  .addEventListener('click', () => createPreset2(stage));
document
  .querySelector('[data-preset="3"]')
  .addEventListener('click', () => createPreset3(stage));
document
  .querySelector('[data-preset="4"]')
  .addEventListener('click', () => createPreset4(stage));
document
  .querySelector('[data-preset="5"]')
  .addEventListener('click', () => createPreset5(stage));
document
  .querySelector('[data-preset="6"]')
  .addEventListener('click', () => createPreset6(stage));
  document
  .querySelector('[data-preset="7"]')
  .addEventListener('click', () => createPreset7(stage));
  document
  .querySelector('[data-preset="8"]')
  .addEventListener('click', () => createPreset8(stage));
  document
  .querySelector('[data-preset="9"]')
  .addEventListener('click', () => createPreset9(stage));




document.querySelector('input[type=file]').addEventListener('change', (e) => {
  renderImage(e, stage);
});

document.querySelector('.addWhiteText').addEventListener('click', () => {
  const textLayer = new Konva.Layer({
    name: 'customText',
  });
  stage.add(textLayer);
  renderText(textLayer,);
});

document.querySelector('.addWhiteTextWithBg').addEventListener('click', () => {
  const textLayer = new Konva.Layer({
    name: 'customText',
  });
  stage.add(textLayer);
  renderTextWithBg(textLayer, stage.theme);
});

document.querySelector('.addBlackText').addEventListener('click', () => {
  const textLayer = new Konva.Layer({
    name: 'customText',
  });
  stage.add(textLayer);
  renderText(textLayer,270,200,true);
});

document.querySelector('.addBlackTextWithBg').addEventListener('click', () => {
  const textLayer = new Konva.Layer({
    name: 'customText',
  });
  stage.add(textLayer);
  renderTextWithBg(textLayer, stage.theme,270,200,true);
});






document
  .querySelector('.save')
  .addEventListener('click', () => saveAsPng(stage));

document.querySelector('.theme-blue').addEventListener('click', () => {
  
  stage.theme = themeColors.blue;
  if (stage.inverse){
    stage.inverse = false;
    recolorText(stage);
  }
  
  recolorElements(stage);
});

document.querySelector('.theme-dark-blue').addEventListener('click', () => {
  
  stage.theme = themeColors.darkBlue;
 if (stage.inverse){
   stage.inverse = false;
   recolorText(stage);
 }
  recolorElements(stage);
});

document.querySelector('.theme-red').addEventListener('click', () => {

  stage.theme = themeColors.red;
 if (stage.inverse){
   stage.inverse = false;
   recolorText(stage);
 }
  
  recolorElements(stage);
});

document.querySelector('.theme-green').addEventListener('click', () => {

  stage.theme = themeColors.green;
if (stage.inverse){
  stage.inverse = false;
  recolorText(stage);
}
  
  recolorElements(stage);
});

document.querySelector('.theme-yellow').addEventListener('click', () => {
  
  stage.theme = themeColors.yellow;
 if (stage.inverse){
   stage.inverse = false;
   recolorText(stage);
 }
  
  recolorElements(stage);
});

document.querySelector('.theme-grey').addEventListener('click', () => {
  stage.theme = themeColors.grey;
if (stage.inverse){
  stage.inverse = false;
  recolorText(stage);
}
  
  recolorElements(stage);
  
});

document.querySelector('.theme-white').addEventListener('click', () => {
  stage.theme = themeColors.white;
  stage.inverse = true;
  recolorElements(stage);
  recolorText(stage);
});

document
  .querySelector('.reset')
  .addEventListener('click', () => clearFullStage(stage));




const opacity = document.querySelector('#opacity-range');
opacity.addEventListener('input', () => setElementsOpacity(stage,opacity.valueAsNumber));


// initial render and deleting to fix font bug
createPreset1(stage);
document.querySelector('.theme-blue').click();
clearFullStage(stage);
