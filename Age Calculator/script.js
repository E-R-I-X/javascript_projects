const birthDay = document.getElementById("birthDay");

const yearText = document.getElementById("yearText");

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", calculateAge);

function calculateAge() {
  const birthDate = birthDay.value;
  if (birthDate === "") {
    alert("Enter your date of birth");
    return;
  }
  const currentDate = new Date();
  const birthDateValue = new Date(birthDate);
  let age = currentDate.getFullYear() - birthDateValue.getFullYear();
  const month = currentDate.getMonth() - birthDateValue.getMonth();
  if (
    (month < 0 || month === 0) &&
    currentDate.getDay() < birthDateValue.getDay()
  ) {
    age--;
  }
  yearText.textContent = `Your age is ${age} years old`;
}
