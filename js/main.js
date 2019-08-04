



//JQuery
$(document).ready(function(){
    'use strict';
    console.log('main.js loaded')
})


//paper.js
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));

// var tool = new Tool();
// console.log('tool='  + tool)
// tool.onMouseDown = function(event){
//     console.log('event='  + event)
//     var c = Shape.Circle(event.point, 20);
//     console.log('c='  + c)
//     c.fillColor = 'green';
//     console.log('c.fillColor='  + c.fillColor)
// }

//畫一個綠色的圈
var c = Shape.Circle(200, 200, 50);
console.log('c='  + c)
c.fillColor = 'green';
console.log('c.fillColor='  + c.fillColor)

//畫64個等大綠色的圈
// var c;
// for(var x=25; x<400; x+=50){
//     for(var y=25;y<400;y+=50){
//         c = Shape.Circle(x, y, 20);
//         c.fillColor = 'green';
//     }
// }

paper.view.draw();

