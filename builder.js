document.addEventListener("DOMContentLoaded", function () {
  var item = document.getElementById("Element1");

  var previewbox = document.getElementById("preview");
  item.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var id = Math.random().toString();
    previewbox.innerHTML += `<p id="${id}">Your Text Here </p>`;
    let addele = document.getElementById("Elementree");
    addele.innerHTML += `<ul id ="${id}" onclick="decide(${id})">
        <li><div style="display:flex;justify-content: space-between;">
        P
        
        </div>
        </li>
        </ul>`;

        
  });
  // Button
  var item2 = document.getElementById('Element2');
  item2.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var id = Math.random().toString();
    previewbox.innerHTML += `<button id="${id}">click me </button>`;
    let addele = document.getElementById("Elementree");
    addele.innerHTML += `<ul id ="${id}" onclick="decide(${id})">
        <li><div style="display:flex;justify-content: space-between;">
        Button
        
        </div>
        </li>
        </ul>`;

        
  });

  // HEADING
  var item3 = document.getElementById('Element3');
  item2.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var id = Math.random().toString();
    previewbox.innerHTML += `<h1 id="${id}">Heading 1 h1 </h1>`;
    let addele = document.getElementById("Elementree");
    addele.innerHTML += `<ul id ="${id}" onclick="decide(${id})">
        <li><div style="display:flex;justify-content: space-between;">
        Heading
        
        </div>
        </li>
        </ul>`;   
  });

  // image
  var item7 = document.getElementById('Element7');
  item7.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var id = Math.random().toString();
    previewbox.innerHTML += `<lable id="${id}">Lable Here</lable>`;
    let addele = document.getElementById("Elementree");
    addele.innerHTML += `<ul id ="${id}" onclick="decide(${id})">
        <li><div style="display:flex;justify-content: space-between;">
        Lable
        
        </div>
        </li>
        </ul>`;

        
  });

  //lable
  var item8 = document.getElementById('Element8');
  item8.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var id = Math.random().toString();
    previewbox.innerHTML += `<input type="text" id="${id}">`;
    let addele = document.getElementById("Elementree");
    addele.innerHTML += `<ul id ="${id}" onclick="decide(${id})">
        <li><div style="display:flex;justify-content: space-between;">
        Text Input
        
        </div>
        </li>
        </ul>`;

        
  });
  // line break
  var item11 = document.getElementById('Element11');
  item11.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var id = Math.random().toString();
    previewbox.innerHTML += `<br id="${id}">`;
    let addele = document.getElementById("Elementree");
    addele.innerHTML += `<ul id ="${id}" onclick="decide(${id})">
        <li><div style="display:flex;justify-content: space-between;">
        Line Break
        
        </div>
        </li>
        </ul>`;

        
  });
// TextFiels
var item6 = document.getElementById('Element6');
  item6.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var id = Math.random().toString();
    previewbox.innerHTML += `<img id="${id}" src="#default" alt="This is image">`;
    let addele = document.getElementById("Elementree");
    addele.innerHTML += `<ul id ="${id}" onclick="decide(${id})">
        <li><div style="display:flex;justify-content: space-between;">
        Image
        
        </div>
        </li>
        </ul>`;

        
  });
//checkbox
var item9 = document.getElementById('Element9');
  item9.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var id = Math.random().toString();
    previewbox.innerHTML += `<input type="checkbox" id="${id}">`;
    let addele = document.getElementById("Elementree");
    addele.innerHTML += `<ul id ="${id}" onclick="decide(${id})">
        <li><div style="display:flex;justify-content: space-between;">
        checkbox
        
        </div>
        </li>
        </ul>`;

        
  });
// submit

var item10 = document.getElementById('Element10');
  item10.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    var id = Math.random().toString();
    previewbox.innerHTML += `<input type="submit" id="${id}">`;
    let addele = document.getElementById("Elementree");
    addele.innerHTML += `<ul id ="${id}" onclick="decide(${id})">
        <li><div style="display:flex;justify-content: space-between;">
        Form Submit
        
        </div>
        </li>
        </ul>`;

        
  });

});

function decide(id){

    if(selectedelement==null){onselects(id); return 0;}
    if(selectedelement==id){onselectcancel(id);return 0;}
    if(selectedelement!=id){onselectcancel(selectedelement)
        onselects(id);
    };


}


var selectedelement;

function onselectcancel(id){
    let element = document.querySelectorAll(`[id="${id}"]`);
    element[1].style.backgroundColor='';
    element[0].style.border='';
    selectedelement=null;
}

function onselects(id) {
    selectedelement = id;
    let element = document.querySelectorAll(`[id="${id}"]`);
    element[1].style.backgroundColor='tomato';
    element[0].style.border='1px dotted red';
    getpro();

}

function cssupdate(){
  console.log('changing css')
  let ccel = document.getElementById(selectedelement);
  ccel.style.backgroundColor = document.getElementById('bgc').value;
  ccel.style.color = document.getElementById('clr').value;
  ccel.style.fontSize = document.getElementById('fs').value;
  ccel.style.textAlign = document.getElementById('alg').value;
  ccel.style.textDecoration = document.getElementById('ts').value;
  ccel.style.padding = document.getElementById('pd').value;
  ccel.style.justifyContent = document.getElementById('js').value;
  ccel.style.alignItems = document.getElementById('ai').value;
  ccel.style.margin = document.getElementById('mr').value;
  ccel.style.display = document.getElementById('dp').value;
  if(ccel.tagName=='IMG'){
    ccel.setAttribute('src',document.getElementById('urrl').value.toString());  
    ccel.setAttribute('height',document.getElementById('hti').value.toString());
    ccel.setAttribute('width',document.getElementById('wti').value.toString());
  }
  
  ccel.innerHTML = document.getElementById('vl').value;
  
}


function getpro(){
  let proele = document.getElementById(selectedelement);
  const computedStyles = window.getComputedStyle(proele);
  let cssp = document.getElementById('in1');

  

      const bgc = computedStyles.getPropertyValue('background-color');
      const clr = computedStyles.getPropertyValue('color');
      const fs = computedStyles.getPropertyValue('font-size');
      const alg = computedStyles.getPropertyValue('text-align');
      const ts = computedStyles.getPropertyValue('text-decoration');
      const pd = computedStyles.getPropertyValue('padding');
      const js = computedStyles.getPropertyValue('justify-content');
      const ai = computedStyles.getPropertyValue('align-items');
      const dp = computedStyles.getPropertyValue('display');
      const mr = computedStyles.getPropertyValue('margin');
      if(proele.tagName.toString()=='IMG'){
        urrl = proele.getAttribute('src');
        hti = proele.getAttribute('height');
        wti = proele.getAttribute('width');
      }

       
      
      
      const vl = proele.innerHTML;
      cssp.innerHTML = `
      <lable>Value : </lable> <input id='vl' type="text" value="${vl}"><br>
      <lable>Background-color : </lable> <input id='bgc' type="text" value="${bgc}"><br>
      <lable>Font-size : </lable> <input id='fs' type="text" value="${fs}"><br>
      <lable>Color : </lable> <input id='clr' type="text" value="${clr}"><br>
      <lable>Text-Align : </lable> <input id='alg' type="text" value="${alg}"><br>
      <lable>Text-Style : </lable> <input id='ts' type="text" value="${ts}"><br>
      <lable>Padding : </lable> <input id='pd' type="text" value="${pd}"><br>
      <lable>Margin : </lable> <input id='mr' type="text" value="${mr}"><br>
      <lable>Justify-Content : </lable> <input id='js' type="text" value="${js}"><br>
      <lable>Align-Item : </lable> <input id='ai' type="text" value="${ai}"><br>
      <lable>Display : </lable> <input id='dp' type="text" value="${dp}"><br>
      `;
      if(proele.tagName=='IMG'){

        cssp.innerHTML += `<lable>URL : </lable> <input id='urrl' type="text" value="${urrl}"><br>
        <lable>Height : </lable> <input id='hti' type="text" value="${hti}"><br>
        <lable>Width : </lable> <input id='wti' type="text" value="${wti}"><br>
        
        `;
      }
      
      console.log(bgc);
}

function del() {
  if(selectedelement!=null){
    console.log(`Startign delete on ${selectedelement}`)
    var elementsWithId = document.querySelectorAll(`[id="${selectedelement}"]`);

  // Iterate through each element and remove it from the DOM
  elementsWithId.forEach(function (element) {
    element.remove();
  });
  selectedelement=null;

  }
  
}

function exports() {
  let it = document.getElementById("preview");
  console.log(it.innerHTML.toString());
}
