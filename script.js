// let gearSmall = document.querySelector(".generatorSmall")
// console.log(button)

let gearSmall = document.querySelector(".generatorSmall")
console.log(gearSmall)
let gearOne = document.querySelector(".generatorOne")
let gearTwo = document.querySelector(".generatorTwo")
let gearThree = document.querySelector(".generatorThree")
let gearFour = document.querySelector(".generatorFour")
let gearFive = document.querySelector(".generatorFive")
let gearSix = document.querySelector(".generatorSix")
let gearSeven = document.querySelector(".generatorSeven")
let gearSmaller = document.querySelector(".generatorSmaller")
let gearSmallest = document.querySelector(".generatorSmallest")
let first = document.querySelector(".firstPull")
let second = document.querySelector(".secondPull")
let third = document.querySelector(".thirdPull")
let fourth = document.querySelector(".fourthPull")
let fifth = document.querySelector(".fifthPull")
let sixth = document.querySelector(".sixthPull")
let seventh = document.querySelector(".seventhPull")
let allGears = document.querySelectorAll(".hi")
console.log(allGears)
let allContent = document.querySelectorAll(".content")
console.log(allContent)

let speedUp = function () {
  gearSmall.style = "animation: counterRotate 2s infinite linear;"
  gearOne.style = "animation: rotate 2s infinite linear;"
  gearTwo.style = "animation: counterRotate 2s infinite linear;"
  gearThree.style = "animation: rotate 2s infinite linear;"
  gearFour.style = "animation: counterRotate 2s infinite linear;"
  gearFive.style = "animation: counterRotate 2s infinite linear;"
  gearSix.style = "animation: rotate 2s infinite linear;"
  gearSeven.style = "animation: counterRotate 2s infinite linear;"
  gearSmaller.style = "animation: rotate 2s infinite linear;"
  gearSmallest.style = "animation: rotate 2s infinite linear;"

  clearPoems();

  first.classList.remove("fadeIn")
  second.classList.remove("fadeIn")
  third.classList.remove("fadeIn")
  fourth.classList.remove("fadeIn")
  fifth.classList.remove("fadeIn")
  sixth.classList.remove("fadeIn")
  seventh.classList.remove("fadeIn")
  // grabOne()
  // grabTwo()
  // grabThree()
  // grabFour()
  // grabFive()
  // grabSix()
  // grabSeven()
  setTimeout(getPoems(), 500);

  setTimeout(function () {
    first.classList.add("fadeIn")
  }, 250);
  setTimeout(function () {
    second.classList.add("fadeIn")
  }, 600);
  setTimeout(function () {
    third.classList.add("fadeIn")
  }, 700);
  setTimeout(function () {
    fourth.classList.add("fadeIn")
  }, 600);
  setTimeout(function () {
    fifth.classList.add("fadeIn")
  }, 700);
  setTimeout(function () {
    sixth.classList.add("fadeIn")
  }, 800);

  setTimeout(function () {
  gearSmall.style = "animation: counterRotate 8s infinite linear;"
  gearOne.style = "animation: rotate 19s infinite linear;"
  gearTwo.style = "animation: counterRotate 30s infinite linear;"
  gearThree.style = "animation: rotate 18s infinite linear;"
  gearFour.style = "animation: counterRotate 30s infinite linear;"
  gearFive.style = "animation: counterRotate 25s infinite linear;"
  gearSix.style = "animation: rotate 10s infinite linear;"
  gearSeven.style = "animation: counterRotate 55s infinite linear;"
  gearSmaller.style = "animation: rotate 15s infinite linear;"
  gearSmallest.style = "animation: rotate 8s infinite linear;"
  }, 1000);
}

gearSmaller.addEventListener("click", speedUp)


let poems = document.querySelectorAll(".poem")
console.log(poems)

let getPoems = function () {
  fetch("https://www.poemist.com/api/v1/randompoems")
    .then(response => response.json())
    .then(results => {
      for (let i = 0; i < results.length; i++) {
        allContent[i].innerText = results[i].title
        allGears[i].addEventListener("click", function () {
          seventh.classList.remove("fadeIn")
          setTimeout(poems[0].innerHTML = results[i].content, 200)
          setTimeout(function () {
            seventh.classList.add("fadeIn")
          }, 200);
        });
      }
      console.log(results)
    })
}

let clearPoems = function () {
  for (let i = 0; i < allContent.length; i++) {
    allContent[i].innerHTML = " ";
  }
}