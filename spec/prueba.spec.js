const ToDoList = require("../scripts/index");

describe("The ToDoList class", () => {
  it("should be a class", () => {
    expect(typeof ToDoList.prototype.constructor).toBe("function");
  });

  it("should have a method getTasks", () => {
    const toDoList = new ToDoList();
    expect(toDoList.getTasks).toBeDefined();
  });

  it("should have a method addTask", () => {
    const toDoList = new ToDoList();
    expect(toDoList.addTask).toBeDefined();
  });

  it("should have a method removeTask", () => {
    const toDoList = new ToDoList();
    expect(toDoList.removeTask).toBeDefined();
  });

  it("The getTasks method should return an array", () => {
    const toDoList = new ToDoList();
    expect(Array.isArray(toDoList.getTasks())).toBe(true);
  });

  it("The addTask method should add a task to the array", () => {
    const toDoList = new ToDoList();
    toDoList.addTask("task");
    expect(toDoList.getTasks()).toContain("task");
  });

  it("The removeTask method should remove a task from the array", () => {
    const toDoList = new ToDoList();
    toDoList.addTask("task");
    toDoList.addTask("task2");
    toDoList.removeTask("task2");
    expect(toDoList.getTasks()).not.toContain("task2");
  
  });

  
});

// npx jasmine
// npx jasmine-browser-runner init --esm

