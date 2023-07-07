//For Mouse Click

const length = document.querySelectorAll(".drum").length;
const drums = document.querySelectorAll(".drum");
for (let i = 0; i < length; i++) {
  drums[i].addEventListener("click", function () {
    let key = drums[i].innerHTML;
    makeSound(key);
    animation(key);
  });
}

//For Keyboard

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  animation(event.key);
});

// Making Sound

function makeSound(key) {
  switch (key) {
    case "w":
      let audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;
    case "a":
      let audio2 = new Audio("sounds/kick-bass.mp3");
      audio2.play();
      break;
    case "s":
      let audio3 = new Audio("sounds/snare.mp3");
      audio3.play();
      break;
    case "d":
      let audio4 = new Audio("sounds/tom-1.mp3");
      audio4.play();
      break;
    case "j":
      let audio5 = new Audio("sounds/tom-2.mp3");
      audio5.play();
      break;
    case "k":
      let audio6 = new Audio("sounds/tom-3.mp3");
      audio6.play();
      break;
    case "l":
      let audio7 = new Audio("sounds/tom-4.mp3");
      audio7.play();
      break;

    default:
      alert("Wrong Key");
      break;
  }
}

// making animation

function animation(key) {
  const active = document.querySelector("." + key);
  active.classList.add("pressed");
  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}
