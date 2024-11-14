// დავალება 1
const root = document.body;
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal-overlay");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submit");

function toggleModal() {
  modal.style.display = "none";
  btn.addEventListener("click", () => {
    if (modal.style.display === "block") {
      modal.style.display = "none";
      btn.textContent = "Show Modal";
    } else {
      modal.style.display = "block";
      btn.textContent = "Hide Modal";
    }
  });
}

toggleModal();

// დავალება 2

const allColors = ["red", "white", "blue", "green", "black"];

function finished(e) {
  e.preventDefault();

  const value = input.value.toLowerCase();

  if (allColors.includes(value)) {
    console.log(`Accepted color: ${value}`);
    document.body.style.backgroundColor = value;
  } else {
    alert("Invalid color. Please enter one of the allowed colors");
  }
}

submitBtn.addEventListener("click", finished);

// დავალება 3
