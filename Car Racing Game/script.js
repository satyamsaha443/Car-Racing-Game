var blueCar = document.getElementById("bluecar");
var redCar = document.getElementById("redcar");
var result = document.getElementById("result")
const score =  document.getElementById("score")
var game =  document.getElementById("game");
var counter = 0;

// bluecar move
blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
    counter++
})


// redcar move

window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
    if(redCarLeft < 260){redCar.style.left = (redCarLeft + 130) + "px"}
 
};

    if(e.keyCode == "37"){
        var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
        if(redCarLeft > 0){redCar.style.left = (redCarLeft - 130) + "px"
       
    }

    }
})

// game over
setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));
        if((blueCarLeft === redCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)

// var blueCar = document.getElementById("bluecar");
// var redCar = document.getElementById("redcar");
// var result = document.getElementById("result")
// const score =  document.getElementById("score")
// var game =  document.getElementById("game");
// var counter = 0;
// var jumpsound = document.getElementById("jumpsound")



// //Game over
// setInterval(function Gameover (){
//     var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
//     var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
//     var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"));
//         if((blueCarLeft === redCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
//             result.style.display = "block";
//             game.style.display = "none";
//             score.innerHTML = `score: ${counter} `;

//             counter = 0;
//         }
// }, 10)



// // bluecar move
// blueCar.addEventListener("animationiteration", function(){
//     var random = ((Math.floor(Math.random() * 3)) * 130)
//     blueCar.style.left = random + "px";
//     counter++
// })

// //rececar move
// window.addEventListener("keydown", function(e){
//    if(e.keyCode == "39"){ var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
//     if(redCarLeft < 260){redCar.style.left = (redCarLeft + 130) + "px"}
//     jumpsound.play()
// };

//     if(e.keyCode == "37"){
//         var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
//         if(redCarLeft > 0){redCar.style.left = (redCarLeft - 130) + "px"
//         jumpsound.play()
//     }

//     }
// })