
import Konva from 'konva';
import {
  createPreset1,
  createPreset2,
  createPreset3,
  createPreset4,
  createPreset5,
  createPreset6,
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
  resizeElements,
} from './controlls';

Konva.hitOnDragEnabled = true;
const stage = setupStage();

const themeColors = {
  blue: '#46A8EF',
  red: '#780707',
  green: '#02ad21',
  yellow: '#feb920',
};

stage.theme = themeColors.blue;

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
// document
//   .querySelector('[data-preset="6"]')
//   .addEventListener('click', () => createPreset6(stage));





document.querySelector('input[type=file]').addEventListener('change', (e) => {
  renderImage(e, stage);
});

document.querySelector('.addText').addEventListener('click', () => {
  const textLayer = new Konva.Layer({
    name: 'customText',
  });
  stage.add(textLayer);
  renderText(textLayer,);
});

document.querySelector('.addTextWithBg').addEventListener('click', () => {
  const textLayer = new Konva.Layer({
    name: 'customText',
  });
  stage.add(textLayer);
  renderTextWithBg(textLayer, stage.theme);
});

document
  .querySelector('.save')
  .addEventListener('click', () => saveAsPng(stage));

document.querySelector('.theme-blue').addEventListener('click', () => {
  stage.theme = themeColors.blue;
  recolorElements(stage);
});

document.querySelector('.theme-red').addEventListener('click', () => {
  stage.theme = themeColors.red;
  recolorElements(stage);
});

document.querySelector('.theme-green').addEventListener('click', () => {
  stage.theme = themeColors.green;
  recolorElements(stage);
});

document.querySelector('.theme-yellow').addEventListener('click', () => {
  stage.theme = themeColors.yellow;
  recolorElements(stage);
});

document
  .querySelector('.reset')
  .addEventListener('click', () => clearFullStage(stage));




const opacity = document.querySelector('#opacity-range');
opacity.addEventListener('input', () => resizeElements(stage,opacity.valueAsNumber));


// initial render and deleting to fix font bug
createPreset1(stage);
clearFullStage(stage);
