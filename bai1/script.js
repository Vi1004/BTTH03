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
let editIndex = null;

// DOM ELEMENTS
const openFormBtn = document.getElementById("openFormBtn");

const closeFormBtn = document.getElementById("closeFormBtn");

const studentModal = document.getElementById("studentModal");

const formTitle = document.getElementById("formTitle");

const messageBox = document.getElementById("messageBox");


// MỞ POPUP
openFormBtn.addEventListener("click", function () {

    resetForm();

    editIndex = null;

    formTitle.innerText = "Thêm Sinh Viên";

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
    if (editIndex === null) {

        students.push(student);

        showMessage("Thêm sinh viên thành công");

    }

    // SỬA
    else {

        students[editIndex] = student;

        showMessage("Cập nhật sinh viên thành công");

        editIndex = null;

    }

    // Render lại bảng
    renderStudents();

    // Reset form
    resetForm();

    // Đóng popup
    studentModal.classList.add("hidden");
});

// RENDER TABLE
function renderStudents() {

    let html = "";


    students.forEach(function (student, index) {

        html += `
            <tr>

                <td>${student.id}</td>

                <td>${student.fullName}</td>

                <td>${student.birthDate}</td>

                <td>${student.className}</td>

                <td>${student.score}</td>

                <td>${student.email}</td>

                <td>

                    <button onclick="editStudent(${index})">
                        Sửa
                    </button>

                    <button onclick="deleteStudent(${index})">
                        Xóa
                    </button>

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

function editStudent(index) {

    // Lấy sinh viên cần sửa

    const student = students[index];


    // Đưa dữ liệu lên form

    studentIdInput.value = student.id;

    fullNameInput.value = student.fullName;

    birthDateInput.value = student.birthDate;

    classNameInput.value = student.className;

    scoreInput.value = student.score;

    emailInput.value = student.email;


    // Đánh dấu đang sửa

    editIndex = index;


    // Đổi tiêu đề form

    formTitle.innerText = "Cập Nhật Sinh Viên";


    // Hiện popup

    studentModal.classList.remove("hidden");

}

function editStudent(index) {

    // Lấy sinh viên cần sửa

    const student = students[index];


    // Đưa dữ liệu lên form

    studentIdInput.value = student.id;

    fullNameInput.value = student.fullName;

    birthDateInput.value = student.birthDate;

    classNameInput.value = student.className;

    scoreInput.value = student.score;

    emailInput.value = student.email;


    // Đánh dấu đang sửa

    editIndex = index;


    // Đổi tiêu đề form

    formTitle.innerText = "Cập Nhật Sinh Viên";


    // Hiện popup

    studentModal.classList.remove("hidden");

}

function deleteStudent(index) {

    // Hỏi xác nhận

    const confirmDelete = confirm(
        "Bạn có chắc muốn xóa sinh viên này?"
    );


    // Nếu không đồng ý

    if (!confirmDelete) {

        return;

    }


    // Xóa khỏi mảng

    students.splice(index, 1);


    // Render lại bảng

    renderStudents();


    // Thông báo

    showMessage("Xóa sinh viên thành công");

}