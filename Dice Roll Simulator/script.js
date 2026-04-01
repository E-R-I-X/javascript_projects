const rollBtn = document.getElementById("roll-btn");
const dice = document.getElementById("dice");
const rollHistoryList = document.getElementById("roll-history");
let historyList = [];

rollBtn.addEventListener("click", () => {
  dice.classList.add("rollanimation");
  setTimeout(() => {
    dice.classList.remove("rollanimation");
    rollDice();
  }, 1000);
});

function rollDice() {
  const rollNumber = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollNumber);
  dice.innerHTML = `${diceFace}`;
  historyList.push(diceFace);
  updateHistory();
}

function updateHistory() {
  rollHistoryList.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const historyItem = document.createElement("li");
    historyItem.classList.add(
      "text-3xl",
      "flex",
      "w-full",
      "justify-between",
      "items-center",
      "bg-gray-100",
      "my-4",
      "py-6",
      "px-2",
      "shadow-gray-400",
      "shadow-md",
      "rounded-xl",
    );
    historyItem.innerHTML = `Roll ${i + 1}: <div class="text-5xl">${historyList[i]}</div>`;
    rollHistoryList.appendChild(historyItem);
  }
}

function getDiceFace(rollNumber) {
  switch (rollNumber) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}
