// =======================
// DOM ELEMENTS
// =======================

const openFormBtn = document.getElementById("openFormBtn");

const closeFormBtn = document.getElementById("closeFormBtn");

const studentModal = document.getElementById("studentModal");

const formTitle = document.getElementById("formTitle");

const messageBox = document.getElementById("messageBox");


// =======================
// MỞ POPUP
// =======================

openFormBtn.addEventListener("click", function () {

    studentModal.classList.remove("hidden");

});


// =======================
// ĐÓNG POPUP
// =======================

closeFormBtn.addEventListener("click", function () {

    studentModal.classList.add("hidden");

});


// =======================
// TEST DOM
// =======================

formTitle.innerText = "Form Sinh Viên";


// =======================
// HIỂN THỊ THÔNG BÁO
// =======================

messageBox.innerText = "Hệ thống đã sẵn sàng";


// =======================
// HÀM SHOW MESSAGE
// =======================

function showMessage(message) {

    messageBox.innerText = message;

}