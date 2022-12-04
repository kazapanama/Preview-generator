import { renderText,renderRectWithOpacity } from './singleElements';
import { clearPreset, rearrangeStage } from './controlls';

export function createPreset1(stage) {
  clearPreset(stage);
  const bgLayer = new Konva.Layer({
    name: 'bgLayer',
  });
  const box = new Konva.Rect({
    x: 400,
    y: 0,
    width: 400,
    height: 455,
    fill: stage.theme,
    draggable: true,
  });

  bgLayer.add(box);
  stage.add(bgLayer);
  const textLayer = new Konva.Layer({
    name: 'textLayer',
  });
  renderText(textLayer,475,200);
  stage.add(textLayer);
  rearrangeStage(stage);
}

export function createPreset2(stage) {
  clearPreset(stage);
  const bgLayer = new Konva.Layer({
    name: 'bgLayer',
  });
  stage.add(bgLayer);
  
  const circle = new Konva.Circle({
    x: 780,
    y: 445 / 2,
    width: 800,
    fill: stage.theme,
    draggable: true,
  });
  bgLayer.add(circle);
  const textLayer = new Konva.Layer({
    name: 'textLayer',
  });
  renderText(textLayer,475,200);
  stage.add(textLayer);

  rearrangeStage(stage);
}

export function createPreset3(stage) {
  clearPreset(stage);
  const bgLayer = new Konva.Layer({
    name: 'bgLayer',
  });
  stage.add(bgLayer);

  const box = new Konva.Path({
    x: 435,
    data: 'M31.5 229.5L0.5 446.5H368.5V0.5H0.5L31.5 229.5Z',
    y: 0,
    fill: stage.theme,
    draggable: true,
  });
  bgLayer.add(box);
  const textLayer = new Konva.Layer({
    name: 'textLayer',
  });
  renderText(textLayer,500,200);
  stage.add(textLayer);
  rearrangeStage(stage);
}

export function createPreset4(stage) {
  clearPreset(stage);
  const bgLayer = new Konva.Layer({
    name: 'bgLayer',
  });
  stage.add(bgLayer);

  const box = new Konva.Path({
    x: 430,
    data: 'M0 229L61.5 446H389.5V0H61.5L0 229Z',
    y: 0,
    fill: stage.theme,
    draggable: true,
  });
  bgLayer.add(box);
  const textLayer = new Konva.Layer({
    name: 'textLayer',
  });
  renderText(textLayer,475,200);
  stage.add(textLayer);
  rearrangeStage(stage);
}

export function createPreset5(stage) {
  clearPreset(stage);
  const bgLayer = new Konva.Layer({
    name: 'bgLayer',
  });
  stage.add(bgLayer);

  const box = new Konva.Path({
    x: 400,
    data: 'M14.9999 -4.57764e-05C-92.0002 -177 415 -4.57764e-05 415 -4.57764e-05V445C415 445 60.9998 624.5 14.9999 445C-31 265.5 122 177 14.9999 -4.57764e-05Z',
    y: 0,
    fill: stage.theme,
    draggable: true,
  });
  bgLayer.add(box);
  const textLayer = new Konva.Layer({
    name: 'textLayer',
  });
  renderText(textLayer,475,200);
  stage.add(textLayer);
  rearrangeStage(stage);
}


export function createPreset6(stage) {
  clearPreset(stage);
  
  const bgLayer = new Konva.Layer({
    name: 'bgLayer',
  });
  stage.add(bgLayer);
  renderRectWithOpacity(bgLayer,stage.theme,400,300)
  
  const textLayer = new Konva.Layer({
    name: 'textLayer',
  });



  renderText(textLayer,405,305);
  stage.add(textLayer);
  rearrangeStage(stage);
}