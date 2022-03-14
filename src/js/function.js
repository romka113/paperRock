import { div } from "./app";
export function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
export function computerPlay() {
  let gameOper = ["Rock", "Paper", "Scissors"];
  return gameOper[rand(0, 3)];
}

export function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    div.style.backgroundImage =
      "url(https://t4.ftcdn.net/jpg/04/03/11/17/240_F_403111774_OsxWERa4NWZJPzqElkwSKR3nnRhp4UEI.jpg)";
  } else if (
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    div.style.backgroundImage =
      "url(https://t3.ftcdn.net/jpg/02/84/65/12/240_F_284651274_TodDY90ZPQaVSuOaBLTRhPjw8AP3ib61.jpg)";
  } else {
    div.style.backgroundImage =
      "url(https://t3.ftcdn.net/jpg/02/77/12/58/240_F_277125895_7iX39NWuBb9kyBwAxTOUpZQNIY4HiAwf.jpg)";
  }
}
