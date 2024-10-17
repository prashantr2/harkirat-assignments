/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  };

  add(todo) {
    this.todos.push(todo); 
  }
  
  remove(idx) {
    if (idx >= this.todos.length) return;
    this.todos.splice(idx, 1);
  }
  
  update(idx, newTodo) {
    if (idx >= this.todos.length) return;
    this.todos[idx] = newTodo;
  }
  
  getAll() {
    return this.todos;
  }
  
  get(idx) {
    if (idx >= this.todos.length) return null;
    return this.todos[idx];
  }
  
  clear() {
    this.todos = [];
  }
};

// let a = new Todo();
// a.add('abc');
// console.log(a.getAll())
// a.add('def');
// a.add('ghi');
// console.log(a.get(1))
// a.remove(0);
// console.log(a.getAll())
// a.clear();
// console.log(a.getAll())

module.exports = Todo;
