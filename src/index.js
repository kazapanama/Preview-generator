import './styles.scss'
import Konva from "konva";

var stage = new Konva.Stage({
  container: 'container',
  width: 800,
  height: 445,
});

// add canvas element
var layer = new Konva.Layer();
stage.add(layer);

// create shape
var box = new Konva.Rect({
  x: 50,
  y: 50,
  width: 100,
  height: 50,
  fill: '#00D2FF',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
});
layer.add(box);


const presetsColors = [
  '#FFF',
  '#000'
]


const presets = document.getElementById('presets')


let buttons = ''

for (let preset of presetsColors) {
  buttons += `
    <button class="preset">${preset}</button>
    `
}

// presets.innerHTML = buttons

const input = document.querySelector('input')
input.innerHTML = ''

const drags = []

input.addEventListener('change', (e) => {

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

    drags.push(tr1)
    layer.add(tr1);
    layer.add(theImg)

  }


})


var lastEvent = false;

stage.on('click tap', function(e) {
    // if click on empty area - remove all transformers
    if (e.target === stage && lastEvent !== e.evt) {
        // stage.find('Transformer').destroy();
        layer.draw();
        return;
    }
  })


  const save = document.querySelector('.save')

 save.addEventListener('click',()=>{

  if (drags.length > 0){
    
    for (let drag of drags){
      drag.hide()
    }
    var dataURL = stage.toDataURL({ pixelRatio: 1 })


    for (let drag of drags){
      drag.show()
    }

   
    
  } else {
    
    var dataURL = stage.toDataURL({ pixelRatio: 1 });
  }

  



  var link = document.createElement('a');
  link.download = 'azaza.png';
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

 })


 const addText = document.querySelector('.addText')


 addText.addEventListener('click',()=>{


  var textNode = new Konva.Text({
    x: 20,
    y: 60,
    text: "TEXTERINO",
    fontSize: 18,
    fontFamily: 'Calibri',
    fontStyle:'bold',
    fill: '#FFF',
    // width: 300,
    padding: 20,
    align: 'center',
    draggable:true,
    edit:true,
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

  drags.push(Transformer)
  layer.add(Transformer);
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


        function check(e){
          if (e.target !== textarea){

            document.querySelector('textarea').remove()
            // window.removeEventListener('click',check)
          }
        }



        window.addEventListener('click',check)
        
        
        
        textarea.focus();

        textarea.addEventListener('keydown', function (e) {
          textNode.text(textarea.value);
        });





      });








  var layerText = new Konva.Layer();
  layerText.add(textNode)
  stage.add(layerText);



 })

 const presetButtons = document.querySelectorAll('.preset')

 let i = 1
 presetButtons.forEach((button)=>{
 
 
    button.addEventListener('click',()=>{

      var url = `./images/presets/${i}.svg`;
    i++
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
    
        drags.push(tr1)
        layer.add(tr1);
        layer.add(theImg)
    
      }
      })
  
  
  
  

 })