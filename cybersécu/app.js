//BOUTONS LIRE LA SUITE

const buttonRecent = document.querySelector(".readmore-recent")
const moreTextRecent = document.querySelector(".hidden-recent")

const buttonTendances = document.querySelector(".readmore-tendances")
const moreTextTendances = document.querySelector(".hidden-tendances")

const button3 = document.querySelector(".article3")
const text3 = document.querySelector(".hidden-article3")

const button4 = document.querySelector(".article4")
const text4 = document.querySelector(".hidden-article4")

const button5 = document.querySelector(".article5")
const text5 = document.querySelector(".hidden-article5")

const button6 = document.querySelector(".article6")
const text6 = document.querySelector(".hidden-article6")

const button7 = document.querySelector(".article7")
const text7 = document.querySelector(".hidden-article7")

const button8 = document.querySelector(".article8")
const text8 = document.querySelector(".hidden-article8")

function showMoreText(button, text) {
  button.addEventListener("click", () => {
    text.style.display = "block";
    button.style.display = "none";
  })
}

showMoreText(buttonRecent, moreTextRecent)

showMoreText(buttonTendances, moreTextTendances)

showMoreText(button3, text3)

showMoreText(button4, text4)

showMoreText(button5, text5)

showMoreText(button6, text6)

showMoreText(button7, text7)

showMoreText(button8, text8)

//////////////////////////////////////////

//SEARCH FORM

const input = document.querySelector('input');

input.addEventListener('input', () => {
  let inputText = document.querySelector('input').value;
  // console.log("texte du input = " + inputText)

  inputText = inputText.toLowerCase()
  // console.log("texte du input en min = " + inputText)

  let x = document.querySelectorAll('article');
  for (i = 0; i < x.length; i++) {
    if (!x[i].textContent.toLowerCase().includes(inputText)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "flex";
    }
  }
})

// /////////////////////////////////////////////////////////////

// MENU BURGER

const btn = document.querySelector(".btn")
const list = document.getElementById("1")
const list2 = document.getElementById("2")
const list3 = document.getElementById("3")

btn.addEventListener('click', () => {
  // j'utilise une méthode native en JS => méthode toggle
  list.classList.toggle("show")
  list2.classList.toggle("show")
  list3.classList.toggle("show")
})

// pour fermer le menu responsive quand il est ouvert

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) {
    list.classList.remove('show')
  }
})

// ////////////////////////////////////////////////

// VIEWCOUNTER

const viewUsers = document.querySelector(".views1")
const art1 = document.querySelector("#article1")
let count1 = 0

art1.addEventListener('mouseenter', () => {
  count1++
  viewUsers.textContent = count1 + " vues"
})

const viewUsers2 = document.querySelector(".views2")
const art2 = document.querySelector("#article2")
let count2 = 0

art2.addEventListener('mouseenter', () => {
  count2++
  viewUsers2.textContent = count2 + " vues"
})

const viewUsers3 = document.querySelector(".views3")
const art3 = document.querySelector("#article3")
let count3 = 0

art3.addEventListener('mouseenter', () => {
  count3++
  viewUsers3.textContent = count3 + " vues"
})

const viewUsers4 = document.querySelector(".views4")
const art4 = document.querySelector("#article4")
let count4 = 0

art4.addEventListener('mouseenter', () => {
  count4++
  viewUsers4.textContent = count4 + " vues"
})

const viewUsers5 = document.querySelector(".views5")
const art5 = document.querySelector("#article5")
let count5 = 0

art5.addEventListener('mouseenter', () => {
  count5++
  viewUsers5.textContent = count5 + " vues"
})

const viewUsers6 = document.querySelector(".views6")
const art6 = document.querySelector("#article6")
let count6 = 0

art6.addEventListener('mouseenter', () => {
  count6++
  viewUsers6.textContent = count6 + " vues"
})

const viewUsers7 = document.querySelector(".views7")
const art7 = document.querySelector("#article7")
let count7 = 0

art7.addEventListener('mouseenter', () => {
  count7++
  viewUsers7.textContent = count7 + " vues"
})

const viewUsers8 = document.querySelector(".views8")
const art8 = document.querySelector("#article8")
let count8 = 0

art8.addEventListener('mouseenter', () => {
  count8++
  viewUsers8.textContent = count8 + " vues"
})
