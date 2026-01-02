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
    removeTask() {
        this.toDoList.pop();
    }
}

module.exports = ToDoList;
