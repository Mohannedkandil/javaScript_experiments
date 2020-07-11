var randomNumber = Math.floor(Math.random()*6+1); // from 1 - 6
var RandomImageSource = "images"+"/"+"dice"+randomNumber+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomImageSource);

var randomNumber2 = Math.floor(Math.random()*6+1); // from 1 - 6
var RandomImageSource2 = "images"+"/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",RandomImageSource2);

// Win and lose Cases
if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
