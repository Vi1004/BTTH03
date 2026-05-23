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

// =======================
// INPUTS
// =======================

const titleInput = document.getElementById("title");

const descriptionInput =
    document.getElementById("description");

const deadlineInput =
    document.getElementById("deadline");

const priorityInput =
    document.getElementById("priority");

const taskForm =
    document.getElementById("taskForm");

const taskList =
    document.getElementById("taskList");


// =======================
// DATA
// =======================

let tasks = [];


// =======================
// SUBMIT FORM
// =======================

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const task = {

        title: titleInput.value,

        description: descriptionInput.value,

        deadline: deadlineInput.value,

        priority: priorityInput.value,

        completed: false

    };


    tasks.push(task);


    renderTasks();

    resetForm();

    taskModal.classList.add("hidden");

    showMessage("Thêm công việc thành công");

});


// =======================
// RENDER TASKS
// =======================

function renderTasks() {

    if (tasks.length === 0) {

        taskList.innerHTML = `
            <p>Chưa có công việc nào</p>
        `;

        return;
    }


    let html = "";


    tasks.forEach(function (task) {

        html += `
            <div class="task-card">

                <h3>${task.title}</h3>

                <p>${task.description}</p>

                <p>Deadline: ${task.deadline}</p>

                <p>Ưu tiên: ${task.priority}</p>

                <p>
                    Trạng thái:
                    ${task.completed
                        ? "Đã hoàn thành"
                        : "Chưa hoàn thành"}
                </p>

                <button>Sửa</button>

                <button>Xóa</button>

            </div>
        `;
    });


    taskList.innerHTML = html;

}


// =======================
// RESET FORM
// =======================

function resetForm() {

    taskForm.reset();

}