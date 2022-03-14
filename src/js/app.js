import { computerPlay, playRound } from "./function";
const h1 = document.createElement("h1");
h1.append(document.createTextNode("Play versus Computer!"));
const select1 = document.createElement("select");
const option = document.createElement("option");
const noteS = document.createTextNode("Paper");
option.append(noteS);
const option1 = document.createElement("option");
const noteS1 = document.createTextNode("Scissors");
option1.append(noteS1);
const option2 = document.createElement("option");
const noteS2 = document.createTextNode("Rock");
option2.append(noteS2);
option.append(noteS);
select1.append(option);
select1.append(option1);
select1.append(option2);
const body = document.querySelector("body");
body.append(select1);
body.append(h1);
const button = document.createElement("button");
button.append("Try!");
body.append(button);
const h2 = document.createElement("h2");
body.append(h2);
//zaidimo pradzia
let computerSelection = "";
let playerSelection = "";
h2.innerText = "Beat me";
button.addEventListener("click", () => {
  h2.innerText = computerPlay();
  computerSelection = h2.innerText;
  playerSelection = select1.value;
  playRound(playerSelection, computerSelection);
});
select1.addEventListener("click", () => {
  computerSelection = "";
  playerSelection = "";
  h2.innerText = "Beat me";
  div.style.backgroundImage = "";
});
const div = document.createElement("div");
export const divas = div;
body.append(div);

console.log(playerSelection);

console.log(computerSelection);
