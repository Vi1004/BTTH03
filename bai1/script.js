// INPUTS
const studentIdInput = document.getElementById("studentId");

const fullNameInput = document.getElementById("fullName");

const birthDateInput = document.getElementById("birthDate");

const classNameInput = document.getElementById("className");

const scoreInput = document.getElementById("score");

const emailInput = document.getElementById("email");

const studentForm = document.getElementById("studentForm");

const studentTableBody = document.getElementById("studentTableBody");

// DATA
let students = [];

// DOM ELEMENTS
const openFormBtn = document.getElementById("openFormBtn");

const closeFormBtn = document.getElementById("closeFormBtn");

const studentModal = document.getElementById("studentModal");

const formTitle = document.getElementById("formTitle");

const messageBox = document.getElementById("messageBox");


// MỞ POPUP
openFormBtn.addEventListener("click", function () {

    studentModal.classList.remove("hidden");

});

// ĐÓNG POPUP
closeFormBtn.addEventListener("click", function () {

    studentModal.classList.add("hidden");

});

// TEST DOM
formTitle.innerText = "Form Sinh Viên";

// HIỂN THỊ THÔNG BÁO
messageBox.innerText = "Hệ thống đã sẵn sàng";

// HÀM SHOW MESSAGE
function showMessage(message) {

    messageBox.innerText = message;

}

// SUBMIT FORM
studentForm.addEventListener("submit", function (event) {

    // Chặn reload trang
    event.preventDefault();

    // Lấy dữ liệu từ input
    const student = {

        id: studentIdInput.value,

        fullName: fullNameInput.value,

        birthDate: birthDateInput.value,

        className: classNameInput.value,

        score: scoreInput.value,

        email: emailInput.value

    };

    // Thêm vào mảng
    students.push(student);

    // Render lại bảng
    renderStudents();

    // Reset form
    resetForm();

    // Đóng popup
    studentModal.classList.add("hidden");

    // Thông báo
    showMessage("Thêm sinh viên thành công");

});

// RENDER TABLE
function renderStudents() {

    let html = "";

    students.forEach(function (student) {

        html += `
            <tr>

                <td>${student.id}</td>

                <td>${student.fullName}</td>

                <td>${student.birthDate}</td>

                <td>${student.className}</td>

                <td>${student.score}</td>

                <td>${student.email}</td>

                <td>
                    <button>Sửa</button>

                    <button>Xóa</button>
                </td>

            </tr>
        `;

    });


    studentTableBody.innerHTML = html;

}

// RESET FORM

function resetForm() {

    studentForm.reset();

}