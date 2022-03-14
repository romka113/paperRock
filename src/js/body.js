export const boDyofGame = () => {
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
  const h2 = document.createElement("h2");
  document.body.append(h2);
  const button = document.createElement("button");
  button.append("Try!");
  document.body.append(button);
  let computerSelection = "";
  let playerSelection = "";
  h2.innerText = "Beat me";

  const div = document.createElement("div");
  body.appendChild(div);
  return {
    h1: h1,
    select1: select1,
    option: option,
    option1: option1,
    option2: option2,
    body: body,
    div: div,
    h2: h2,
    button: button,
  };
};
