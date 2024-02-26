// Modificare la refresh a cartii cu numarul 1 //
var randomNumber1 = Math.floor(Math.random() * 10) + 1;

var randomImageSource1 = "./image/" + randomNumber1 + ".jpg";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

// Modificare la refresh a cartii cu numarul 2 //
var randomNumber2 = Math.floor(Math.random() * 10) + 1;

var randomImageSource2 = "./image/" + randomNumber2 + ".jpg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Conditiile IF statement pentru modificarea textului //
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "👻Player 1 Wins!"
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "👻Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML ="👻It's a draw!"
}
