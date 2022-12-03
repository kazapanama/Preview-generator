export function setupStage() {
  
  return new Konva.Stage({
    container: 'container',
    width: 800,
    height: 445,
  });
}


export function renderImage(e, stage) {
  const layer = new Konva.Layer({
    name:'imageLayer'
  });
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


    theImg.addEventListener('wheel',(e)=>{
      let scale = -e.deltaY*0.001
      const {x,y} = theImg.scale()
      console.log(theImg.scale({x:x+scale,y:y+scale}))
    })


var lastDist = 0;

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}



theImg.addEventListener(
  'touchmove',
  function (evt) {
    var touch1 = evt.touches[0];
    var touch2 = evt.touches[1];

    if (touch1 && touch2 ) {
      var dist = getDistance(
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

      var scale = (theImg.scaleX() * dist) / lastDist;

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


    layer.zIndex(0)
    layer.add(tr1);
    layer.add(theImg)
  }

}




export function renderText(layer) {
  var textNode = new Konva.Text({
    x: 500,
    y: 200,
    text: "TEXTERINO",
    fontSize: 46,
    fontFamily: 'RussoOne',
    fill: '#FFF',
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
  layer.draw()


  const editDiv = document.querySelector('.editor-text')
  
  


  textNode.on('dblclick dbltap', () => {
   let textarea = document.createElement('textarea')
    editDiv.appendChild(textarea)
    textarea.innerText = textNode.text()

    const end = textarea.value.length;
    textarea.setSelectionRange(end, end);

    textarea.focus()


    textarea.addEventListener('input',(e)=>{
      textNode.text(e.target.value)
    })
  
    textarea.addEventListener('blur',(e)=>{
      textarea.value = ''
      textarea.disabled = true
      textarea.remove()
    })





})

  



}

export function renderTextWithBg(layer,stage) {
  var textNode = new Konva.Text({
    x: 500,
    y: 200,
    text: "Text with bg",
    fontSize: 46,
    fontFamily: 'RussoOne',
    fill: '#FFF',
    align: 'center',
    draggable: true,
    edit: true,
  });

    const box = new Konva.Rect({
        x: textNode.x()-5,
        y: textNode.y()-5,
        width: textNode.width()+10,
        height: textNode.height()+10,
        fill: stage.theme,
        listening:true
      });

      var Transformer = new Konva.Transformer({
        nodes: [textNode,box],
        keepRatio: true,
        enabledAnchors: [
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right',
        ],
        shouldOverdrawWholeArea:true,
      });




  layer.add(box);

  layer.add(Transformer)
  layer.add(textNode)




  const editDiv = document.querySelector('.editor-text')
  
  
  let textarea 




  textNode.on('dblclick dbltap', () => {
    textarea = document.createElement('textarea')
    editDiv.appendChild(textarea)
    textarea.innerText = textNode.text()

    const end = textarea.value.length;
    textarea.setSelectionRange(end, end);

    textarea.focus()


    textarea.addEventListener('input',(e)=>{
      textNode.text(e.target.value)
      box.width(textNode.width()+10)
      box.height(textNode.height()+10)
    })
  
    textarea.addEventListener('blur',(e)=>{
      textarea.value = ''
      textarea.disabled = true
      textarea.remove()
    })


  })
}