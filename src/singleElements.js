export function setupStage() {
  
  //w=800,h=445
  return new Konva.Stage({
    container: 'container',
    width: 800,
    height: 445,
  });

  



}


export function renderImage(e, stage) {
  var layer = new Konva.Layer();
  stage.add(layer);

  var url = URL.createObjectURL(e.target.files[0]);
  var img = new Image();
  img.src = url;
  img.onload = () => {
    var img_width = img.width;
    var img_height = img.height;

    // calculate dimensions to get max 300px
    var max = 540;
    var ratio = (img_width > img_height ? (img_width / max) : (img_height / max))


    var theImg = new Konva.Image({
      image: img,
      x: 50,
      y: 30,
      width: img_width / ratio,
      height: img_height / ratio,
      draggable: true,
    })


    var tr1 = new Konva.Transformer({
      nodes: [theImg],
      keepRatio: true,
      enabledAnchors: [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
    });

    layer.zIndex(0)
    layer.add(tr1);
    layer.add(theImg)
  }


}



export function renderBG(n, layer) {
  var url = `./images/presets/${n}.svg`;

  var img = new Image();
  img.src = url;
  img.onload = () => {


    var theImg = new Konva.Image({
      image: img,
      x: 400,
      y: 0,
      width: 400,
      height: 455,
      draggable: true,
    })


    var tr1 = new Konva.Transformer({
      name: 'tr',
      nodes: [theImg],
      keepRatio: true,
      enabledAnchors: [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
    });

    //   drags.push(tr1)
    layer.add(tr1);
    layer.add(theImg)
  }
}

export function renderText(layer,stage) {
  var textNode = new Konva.Text({
    x: 500,
    y: 200,
    text: "TEXTERINO",
    fontSize: 46,
    fontFamily: 'RussoOne-Regular',
    fontStyle: 'bold',
    fill: '#FFF',
    // padding: 20,
    align: 'center',
    draggable: true,
    edit: true,
  });

  var Transformer = new Konva.Transformer({
    nodes: [textNode],
    keepRatio: true,
    enabledAnchors: [
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
    ],
  });



  layer.add(Transformer)
  layer.add(textNode)



  textNode.on('dblclick dbltap', () => {
    // create textarea over canvas with absolute position

    // first we need to find position for textarea
    // how to find it?

    // at first lets find position of text node relative to the stage:
    var textPosition = textNode.getAbsolutePosition();

    // then lets find position of stage container on the page:
    var stageBox = stage.container().getBoundingClientRect();

    // so position of textarea will be the sum of positions above:
    var areaPosition = {
      x: stageBox.left + textPosition.x,
      y: stageBox.top + textPosition.y,
    };

    // create textarea and style it
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);

    textarea.value = textNode.text();
    textarea.style.position = 'absolute';
    textarea.style.top = areaPosition.y + 'px';
    textarea.style.left = areaPosition.x + 'px';
    textarea.style.width = textNode.width();

    textarea.focus();

    textarea.addEventListener('keydown', function (e) {
      // hide on enter
      if (e.keyCode === 13) {
        textNode.text(textarea.value);
        document.body.removeChild(textarea);
      }
    });
  }); textNode.on('dblclick dbltap', () => {
    // create textarea over canvas with absolute position

    // first we need to find position for textarea
    // how to find it?

    // at first lets find position of text node relative to the stage:
    var textPosition = textNode.getAbsolutePosition();

    // then lets find position of stage container on the page:
    var stageBox = stage.container().getBoundingClientRect();

    // so position of textarea will be the sum of positions above:
    var areaPosition = {
      x: stageBox.left + textPosition.x,
      y: stageBox.top + textPosition.y,
    };

    // create textarea and style it
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);

    textarea.value = textNode.text();
    textarea.style.position = 'absolute';
    textarea.style.top = areaPosition.y + 'px';
    textarea.style.left = areaPosition.x + 'px';
    textarea.style.width = textNode.width();


    function check(e) {
      if (e.target !== textarea) {

        document.querySelector('textarea').remove()
        // window.removeEventListener('click',check)
      }
    }



    window.addEventListener('click', check)



    textarea.focus();

    textarea.addEventListener('keydown', function (e) {
      textNode.text(textarea.value);
    });
  });



}

