export function fitStageIntoParentContainer(stage) {
  const container = document.querySelector('#editor');

  if (container.offsetWidth < 800) {
    const sceneWidth = 800;
    const sceneHeight = 445;
    const scale = container.offsetWidth / sceneWidth;

    stage.width(sceneWidth * scale);
    stage.height(sceneHeight * scale);
    stage.scale({ x: scale, y: scale });
  }
}

export function saveAsPng(stage) {
  const transformers = stage.find('Transformer');

  for (const transformer of transformers) {
    transformer.hide();
  }
  const oldSize = stage.size();

  let VIRTUAL_WIDTH = 800;
  const pixelRatio = VIRTUAL_WIDTH / stage.width();
  const dataURL = stage.toDataURL({ pixelRatio });

  stage.size(oldSize);

  for (let transformer of transformers) {
    transformer.show();
  }

  const link = document.createElement('a');
  link.download = `${Date.now()}.png`;
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function clearFullStage(stage) {
  stage.destroyChildren();
}

export function clearPreset(stage) {
  let textNodes = stage.find('.textLayer');

  for (let text of textNodes) {
    text.destroy();
  }

  let bgLayer = stage.find('.bgLayer');
  for (let bg of bgLayer) {
    bg.destroy();
  }
}

export function rearrangeStage(stage) {
  const textLayers = stage.find('.textLayer');
  for (let text of textLayers) {
    text.zIndex(0);
  }

  const bgLayer = stage.find('.bgLayer');
  bgLayer[0].zIndex(0);

  const imgLayer = stage.find('.imageLayer');
  for (let img of imgLayer) {
    img.zIndex(0);
  }
}

export function recolorElements(stage) {
  const color = stage.theme;
  const changeElems = [
    ...stage.find('Rect'),
    ...stage.find('Circle'),
    ...stage.find('Path'),
  ];

  for (let element of changeElems) {
    element.fill(color);
  }

  document
    .querySelectorAll('path')
    .forEach((path) => (path.style.fill = color));
  document
    .querySelectorAll('rect')
    .forEach((path) => (path.style.stroke = color));
  document.querySelector('.controll-input').style.borderColor = color;
}

export function resizeElements(stage,value){
  const changeElems = [
    ...stage.find('Rect'),
    ...stage.find('Circle'),
    ...stage.find('Path'),
  ];


  for (let layer of changeElems){
    layer.opacity(value*0.01)

  }

}