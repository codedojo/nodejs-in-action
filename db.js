let id = 3;

let todos = [
    {id: 1, title: 'Изучить Node', completed: true},
    {id: 2, title: 'Познакомиться с Koa', completed: true},
    {id: 3, title: 'Написать приложение', completed: false},
];

module.exports = {
    getTodos(fn) {
        return Promise.resolve(fn ? todos.filter(fn) : todos);
    },

    getTodo(id) {
        return Promise.resolve(todos.filter(todo => todo.id == id));
    },

    addTodo({ title, completed = false }) {
        let todo = { title, completed };

        todo.id = ++id;
        todos.push(todo);

        return Promise.resolve(todo);
    },

    removeTodo(id) {
        todos = todos.filter(todo => todo.id != id);

        return Promise.resolve();
    },

    updateTodo(id, data) {
        let index = todos.findIndex(todo => todo.id == id);
        let todo = todos[index];
        
        if (todo) {
            Object.assign(todo, data);
        }

        return Promise.resolve(todo);
    }
};