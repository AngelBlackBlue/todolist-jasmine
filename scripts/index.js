class ToDoList {
    constructor() {
        this.toDoList = [];
    }

    getTasks() {
        return this.toDoList;
    }
    addTask(task) {
        this.toDoList.push(task);
    }
    removeTask(task) {
        const index = this.toDoList.indexOf(task);
        if (index !== -1) {
            this.toDoList.splice(index, 1);
        }
    }
}

// Logic for the Browser (DOM)
if (typeof document !== "undefined") {
    const list = new ToDoList();

    const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    function render() {
        // Clear current list
        taskList.innerHTML = "";

        // Get tasks and render
        const tasks = list.getTasks();
        tasks.forEach((task) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${task}</span>
                <span class="delete-btn" title="Eliminar">×</span>
            `;

            const deleteBtn = li.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", () => {
                list.removeTask(task);
                render();
            });

            taskList.appendChild(li);
        });
    }

    addBtn.addEventListener("click", () => {
        const text = input.value;
        if (text.trim() !== "") {
            list.addTask(text);
            input.value = "";
            render();
        }
    });

    // Allow Enter key to add task
    input.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
}

// Logic for Node (Jasmine Testing)
if (typeof module !== "undefined" && module.exports) {
    module.exports = ToDoList;
}
