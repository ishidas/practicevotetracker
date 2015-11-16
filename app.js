//will push in photos
var imgArray = [];
console.log(imgArray);

function ImgObject (imgName, path) {
  this.imgName = imgName;
  this.path = path;
  this.numOfVotes = 0;
  imgArray.push(this);
}

var img1 = new ImgObject('benedict','img/benedict.jpg');
var img2 = new ImgObject('chicken','img/chicken.jpg');
var img3 = new ImgObject('cinnamon','img/cinnamon.jpg');
var img4 = new ImgObject('coldnoodles','img/coldnoodles.jpg');
var img5 = new ImgObject('crepe','img/crepe.jpg');
var img6 = new ImgObject('curry','img/curry.jpg');
var img7 = new ImgObject('fajita','img/fajita.jpg');
var img8 = new ImgObject('katsu','img/katsu.jpg');
var img9 = new ImgObject('lasagnia','img/lasagnia.jpg');
var img10 = new ImgObject('lumpia','img/lumpia.jpg');
var img11 = new ImgObject('pasta','img/pasta.jpg');
var img12 = new ImgObject('poke','img/poke.jpg');
var img13 = new ImgObject('steak','img/steak.jpg');
var img14 = new ImgObject('tenpura','img/tenpura.jpg');
var img15 = new ImgObject('tsukune','img/tsukune.jpg');

//generates random numbers left & right
function randomNum () {
  return Math.floor(Math.random()*imgArray.length);
}

var randomNum1 = randomNum();
var randomNum2 = randomNum();

//Avoids duplicates
while (randomNum1 === randomNum2){
  randomNum1 = randomNum();
}

//Create Image tags//
var el1 = document.getElementById('left');
var imgEl1 = document.createElement('img');

var el2 = document.getElementById('right');
var imgEl2 = document.createElement('img');

//initial display//
function initialDisplay() {
imgEl1.id = 'img1';
imgEl1.src = imgArray[randomNum1].path;
el1.appendChild(imgEl1);
imgEl2.id = 'img2';
imgEl2.src = imgArray[randomNum2].path;
el2.appendChild(imgEl2);
}


function highlight() {
  if(displayLeft){
  imgEl1.style.border = 'thick solid red';
  } else {
  imgEl2.style.border = 'thick solid red';
  }
}

function displayLeft() {
  highlight();
  imgEl1.id = 'img1';
  imgEl1.src = imgArray[randomNum1].path;

}

function displayRight() {
  highlight();
  imgEl2.id = 'img2';
  imgEl2.src = imgArray[randomNum2].path;
}

function removeAndRefresh() {
  var el1 = document.getElementById('left');
  var imgEl1 = document.getElementById('img1');
  var el2 = document.getElementById('right');
  var imgEl2 = document.getElementById('img1');
  el1.removeChild(imgEl1);
  el2.removeChild(imgEl2);
}

// displayLeft();
// displayRight();
initialDisplay();

document.getElementById('button').addEventListener('click', removeAndRefresh);
document.getElementById('img1').addEventListener('click', displayLeft);
document.getElementById('img2').addEventListener('click', displayRight);

// var barChart = new Chart(ctx).Bar(data);

// var data = {

// }





































