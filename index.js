var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "images/Dice" + randomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , randomImg1);



var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "images/Dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImg2);


if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Congratulations🎉 You Win!!";
}

else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Sorry🙁 Bot Wins!!";
}

else {
    document.querySelector("h1").innerHTML = "Draw";

}