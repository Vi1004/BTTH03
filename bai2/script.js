// =======================
// DOM ELEMENTS
// =======================

const openFormBtn = document.getElementById("openFormBtn");

const closeFormBtn = document.getElementById("closeFormBtn");

const taskModal = document.getElementById("taskModal");

const formTitle = document.getElementById("formTitle");

const messageBox = document.getElementById("messageBox");


// =======================
// OPEN MODAL
// =======================

openFormBtn.addEventListener("click", function () {

    taskModal.classList.remove("hidden");

});


// =======================
// CLOSE MODAL
// =======================

closeFormBtn.addEventListener("click", function () {

    taskModal.classList.add("hidden");

});


// =======================
// TEST DOM
// =======================

formTitle.innerText = "Form Công Việc";

messageBox.innerText = "Ứng dụng đã sẵn sàng";


// =======================
// SHOW MESSAGE
// =======================

function showMessage(message) {

    messageBox.innerText = message;

}