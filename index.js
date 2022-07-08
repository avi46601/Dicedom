var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;  // give us random number
var randomDiceImage1= "images/"+"dice" + randomNumber1 + ".png"; // dice 1 t0 dice 6

var randomNumber2 = Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;  // give us random number
var randomDiceImage2= "images/"+"dice" + randomNumber2 + ".png"; // dice 1 t0 dice 6

document.querySelectorAll("img")[0].setAttribute("src" ,randomDiceImage2);
document.querySelectorAll("img")[1].setAttribute("src" ,randomDiceImage1);

if (randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 win !";
}
else if(randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player 2 win !";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}
