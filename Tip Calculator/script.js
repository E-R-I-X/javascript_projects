const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const calculateBtn = document.getElementById("calculateBtn");

function calculateTotal() {
  let billValue = Number(bill.value);
  let tipValue = Number(tip.value);
  let totalValue = (tipValue * billValue) / 100 + billValue;
  total.textContent = totalValue.toFixed(2);
}

calculateBtn.addEventListener("click", calculateTotal);
