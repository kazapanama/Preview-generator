export function setupStage() {
  return new Konva.Stage({
    container: 'container',
    width: 800,
    height: 445,
  });
}

export function renderImage(e, stage) {
  const layer = new Konva.Layer({
    name: 'imageLayer',
  });
  stage.add(layer);
  const url = URL.createObjectURL(e.target.files[0]);
  const img = new Image();
  img.src = url;
  img.onload = () => {
    let img_width = img.width;
    let img_height = img.height;

    // calculate dimensions to get max 300px
    const max = 540;
    const ratio = img_width > img_height ? img_width / max : img_height / max;

    const theImg = new Konva.Image({
      image: img,
      x: 50,
      y: 30,
      width: img_width / ratio,
      height: img_height / ratio,
      draggable: true,
    });

    const transformer = new Konva.Transformer({
      nodes: [theImg],
      keepRatio: true,
      enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    });

    theImg.addEventListener('wheel', (e) => {
      let scale = -e.deltaY * 0.001;
      const { x, y } = theImg.scale();
      theImg.scale({ x: x + scale, y: y + scale })
    });

    let lastDist = 0;

    function getDistance(p1, p2) {
      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    theImg.addEventListener(
      'touchmove',
      function (evt) {
        let touch1 = evt.touches[0];
        let touch2 = evt.touches[1];

        if (touch1 && touch2) {
          let dist = getDistance(
            {
              x: touch1.clientX,
              y: touch1.clientY,
            },
            {
              x: touch2.clientX,
              y: touch2.clientY,
            }
          );

          if (!lastDist) {
            lastDist = dist;
          }

          const scale = (theImg.scaleX() * dist) / lastDist;

          theImg.scaleX(scale);
          theImg.scaleY(scale);
          lastDist = dist;
        }
      },
      false
    );

    theImg.addEventListener(
      'touchend',
      function () {
        lastDist = 0;
      },
      false
    );

    layer.zIndex(0);
    layer.add(transformer);
    layer.add(theImg);
  };
}

export function renderText(layer,x=270,y=200,inverse=false) {
  const textNode = new Konva.Text({
    x,
    y,
    text: 'Sample text',
    fontSize: 46,
    fontFamily: 'RussoOne',
    fill: (inverse? '000': '#FFF'),
    shadowOffset: {x: 5, y: 5},
    shadowColor: '#292929',
    shadowBlur: 5,
    shadowOpacity: 0.25,
    align: 'center',
    draggable: true,
    edit: true,
  });

  const Transformer = new Konva.Transformer({
    nodes: [textNode],
    keepRatio: true,
    enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
  });

  layer.add(Transformer);
  layer.add(textNode);
  layer.draw();

  const editDiv = document.querySelector('.editor-text');

  textNode.on('dblclick dbltap', () => {
    let textarea = document.createElement('textarea');
    editDiv.appendChild(textarea);
    textarea.innerText = textNode.text();

    const end = textarea.value.length;
    textarea.setSelectionRange(end, end);

    textarea.focus();

    textarea.addEventListener('input', (e) => {
      textNode.text(e.target.value);
    });

    textarea.addEventListener('blur', (e) => {
      textarea.value = '';
      textarea.disabled = true;
      textarea.remove();
    });
  });
}

export function renderTextWithBg(layer,color,x=270,y=200,inverse=false) {
  const textNode = new Konva.Text({
    x,
    y,
    text: 'Sample text',
    fontSize: 46,
    fontFamily: 'RussoOne',
    fill:  (inverse? '000': '#FFF'),
    align: 'center',
    shadowOffset: {x: 5, y: 5},
    shadowColor: '#292929',
    shadowBlur: 5,
    shadowOpacity: 0.25,
    draggable: true,
    edit: true,
  });


  const box = new Konva.Rect({
    x: textNode.x() - 5,
    y: textNode.y() - 5,
    width: textNode.width() + 5,
    height: textNode.height() + 5,
    cornerRadius:5,
    fill: color,
    listening: true,
  });

  const Transformer = new Konva.Transformer({
    nodes: [textNode, box],
    keepRatio: true,
    enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    shouldOverdrawWholeArea: true,
  });

  layer.add(box);

  layer.add(Transformer);
  layer.add(textNode);

  const editDiv = document.querySelector('.editor-text');

  let textarea;

  textNode.on('dblclick dbltap', () => {
    textarea = document.createElement('textarea');
    editDiv.appendChild(textarea);
    textarea.innerText = textNode.text();

    const end = textarea.value.length;
    textarea.setSelectionRange(end, end);

    textarea.focus();

    textarea.addEventListener('input', (e) => {
      textNode.text(e.target.value);
      box.width(textNode.width() + 10);
      box.height(textNode.height() + 10);
    });

    textarea.addEventListener('blur', (e) => {
      textarea.value = '';
      textarea.disabled = true;
      textarea.remove();
    });
  });
}


export function renderRectWithOpacity(layer,color,x,y,inverse=false) {
  const textNode = new Konva.Text({
    x,
    y,
    text: 'Sample text\nSample text',
    fontSize: 46,
    name:'dontRecolor',
    fontFamily: 'RussoOne',
    fill:  (inverse? '000': '#FFF'),
    align: 'left',
    shadowOffset: {x: 5, y: 5},
    shadowColor: '#292929',
    shadowBlur: 5,
    shadowOpacity: 0.25,
    draggable: true,
    edit: true,
  });
  
  
  const box = new Konva.Rect({
    name:'dontRecolor',
    x:x-5,
    y:y-5,
    width: textNode.width() + 10,
    height: textNode.height() + 5,
    fill: '#000',
    opacity: 0.55,
    cornerRadius:5,
    draggable: false,
  });

  const tip = new Konva.Rect({
    x:box.x() - 10,
    y:box.y(),
    width: 10,
    height: box.height(),
    cornerRadius:5,
    fill: color,
    draggable: false,
  });


  const Transformer = new Konva.Transformer({
    nodes: [ box, tip,textNode,],
    keepRatio: true,
    enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
  });

  layer.add(box);
  layer.add(textNode);
  layer.add(tip);
  layer.add(Transformer);


  const editDiv = document.querySelector('.editor-text');

  let textarea;

  textNode.on('dblclick dbltap', () => {
    textarea = document.createElement('textarea');
    editDiv.appendChild(textarea);
    textarea.innerText = textNode.text();

    const end = textarea.value.length;
    textarea.setSelectionRange(end, end);

    textarea.focus();

    textarea.addEventListener('input', (e) => {
      textNode.text(e.target.value);
      box.width(textNode.width() + 10);
      box.height(textNode.height() + 10);
      tip.height(box.height())
    });

    textarea.addEventListener('blur', (e) => {
      textarea.value = '';
      textarea.disabled = true;
      textarea.remove();
    });
  });



}

export function renderWhiteSmallText(layer,x=270,y=200) {
  const textNode = new Konva.Text({
    x,
    y,
    text: '5 Грудня',
    fontSize: 20,
    fontFamily: 'RussoOne',
    fill: '#000',
    align: 'center',
    name:'dontRecolor',
    shadowOffset: {x: 5, y: 5},
    shadowColor: '#292929',
    shadowBlur: 5,
    shadowOpacity: 0.25,
    draggable: true,
    edit: true,
  });


  const box = new Konva.Rect({
    x: textNode.x() - 5,
    y: textNode.y() - 5,
    name:'dontRecolor',
    width: textNode.width() + 5,
    height: textNode.height() + 5,
    cornerRadius:5,
    fill: '#FFF',
    listening: true,
  });

  const Transformer = new Konva.Transformer({
    nodes: [textNode, box],
    keepRatio: true,
    enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    shouldOverdrawWholeArea: true,
  });

  layer.add(box);

  layer.add(Transformer);
  layer.add(textNode);

  const editDiv = document.querySelector('.editor-text');

  let textarea;

  textNode.on('dblclick dbltap', () => {
    textarea = document.createElement('textarea');
    editDiv.appendChild(textarea);
    textarea.innerText = textNode.text();

    const end = textarea.value.length;
    textarea.setSelectionRange(end, end);

    textarea.focus();

    textarea.addEventListener('input', (e) => {
      textNode.text(e.target.value);
      box.width(textNode.width() + 10);
      box.height(textNode.height() + 10);
    });

    textarea.addEventListener('blur', (e) => {
      textarea.value = '';
      textarea.disabled = true;
      textarea.remove();
    });
  });
}