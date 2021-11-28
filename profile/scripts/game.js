const cardArray = [
  {
    name: "a",
    path: "images/imgs/a.jpg"
  },
  {
    name: "b",
    path: "images/imgs/b.jpg"
  },
  {
    name: "c",
    path: "images/imgs/c.jpg"
  },
  {
    name: "d",
    path: "images/imgs/d.jpg"
  },
  {
    name: "e",
    path: "images/imgs/e.jpg"
  },
  {
    name: "f",
    path: "images/imgs/f.jpg"
  },
  {
    name: "g",
    path: "images/imgs/g.jpg"
  },
  {
    name: "h",
    path: "images/imgs/h.jpg"
  },
  {
    name: "g",
    path: "images/imgs/g.jpg"
  },
  {
    name: "f",
    path: "images/imgs/f.jpg"
  },
  {
    name: "e",
    path: "images/imgs/e.jpg"
  },
  {
    name: "d",
    path: "images/imgs/d.jpg"
  },
  {
    name: "c",
    path: "images/imgs/c.jpg"
  },
  {
    name: "b",
    path: "images/imgs/b.jpg"
  },
  {
    name: "a",
    path: "images/imgs/a.jpg"
  },
  {
    name: "h",
    path: "images/imgs/h.jpg"
  }
  
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.game-grid');
const scoreEl = document.querySelector('#score');
const msgEl = document.querySelector('#msg');
const btn = document.querySelector('#restart');

let currentCard = [];
let currentCardId = [];
let pairedCard = [];

for(let i = 0; i < cardArray.length; i++) {
  const card = document.createElement("img")
  card.setAttribute("src", "images/imgs/bg.jpg");
  card.setAttribute("data-id", i);
  card.addEventListener('click', flipCard);
  card.classList.add('card')
  grid.appendChild(card);
}

const cards = document.querySelectorAll('.card');

btn.addEventListener('click', restart);


function restart() {
  cardArray.sort(() => 0.5 - Math.random());
  currentCard = [];
  currentCardId = [];
  pairedCard = [];
  cards.forEach(card => {
    card.addEventListener('click',flipCard);
    card.setAttribute("src","images/imgs/bg.jpg");
  })
  msgEl.textContent = 'Message for You';
  scoreEl.textContent = '0';
}

function checkIfMatch() { 
 const firstId = currentCardId[0];
 const secondId = currentCardId[1];

 if(currentCard[0] === currentCard[1]) {
    msgEl.textContent = "Success, keep going!";
    cards[firstId].setAttribute("src", "images/imgs/bg_white.jpg");
    cards[secondId].setAttribute("src", "images/imgs/bg_white.jpg");
    pairedCard.push(currentCard);
    cards[firstId].removeEventListener('click', flipCard);
    cards[secondId].removeEventListener('click', flipCard);

 } else {
    msgEl.textContent = "Wrong, try again!";
    cards[firstId].setAttribute("src", "images/imgs/bg.jpg");
    cards[secondId].setAttribute("src", "images/imgs/bg.jpg");
 }
 currentCard = [];
 currentCardId = [];
 scoreEl.textContent = pairedCard.length * 125;
 if(pairedCard.length === cardArray.length / 2 ){
   //scoreEl.textContent = "";
   msgEl.textContent = "Congratulations!"
   btn.addEventListener('click',restart);
 }
}

function flipCard() {
  cardIdx = this.getAttribute("data-id");
  currentCard.push(cardArray[cardIdx].name);
  currentCardId.push(cardIdx);
  this.setAttribute("src", cardArray[cardIdx].path);
  if(currentCard.length === 2) {    
    setTimeout(checkIfMatch, 300);  
  }
}
