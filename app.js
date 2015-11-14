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
console.log(randomNum1);
console.log(randomNum2);


//initial display of my photos//
function displayLeft() {
  if(randomNum1 === randomNum2){
    randomNum();
  } else {
  var el1 = document.getElementById('left');
  var imgEl1 = document.createElement('img');
  imgEl1.id = 'img1';
  imgEl1.src = imgArray[randomNum1].path;
  el1.appendChild(imgEl1);
  }

}

function displayRight() {
  if(randomNum1 === randomNum2){
    randomNum();
  } else {
  var el2 = document.getElementById('right');
  var imgEl2 = document.createElement('img');
  imgEl2.id = 'img2';
  imgEl2.src = imgArray[randomNum2].path;
  el2.appendChild(imgEl2);
  }
}

// function votesCounter() {
  if(addEventListener('click',displayLeft)){
     imgArray[randomNum1].numOfVotes++ ;
} else if(addEventListener('click', displayRight)){
     imgArray[randomNum2].numOfVotes++ ; }
// }
// votesCounter();

displayLeft();
displayRight();

document.getElementById('img1').addEventListener('click', displayLeft);
document.getElementById('img2').addEventListener('click', displayRight);

// var barChart = new Chart(ctx).Bar(data);

// var data = {

// }





































