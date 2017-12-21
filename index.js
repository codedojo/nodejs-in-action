const Koa = require('koa');
const route = require('koa-route');
const bodyParser = require('koa-bodyparser');

const db = require('./db');

const app = new Koa();

app.use(bodyParser());

app.use(route.get('/todos', async context => {
    context.body = await db.getTodos();
}));

app.use(route.get('/todos/:id', async (context, id) => {
    context.body = await db.getTodo(id);
}));

app.use(route.post('/todos', async context => {
    context.status = 201;
    context.body = await db.addTodo(context.request.body);
}));

app.use(route.put('/todos/:id', async (context, id) => {
    context.body = await db.updateTodo(id, context.request.body);
}));

app.use(route.delete('/todos/:id', async (context, id) => {
    await db.removeTodo(id);
    context.status = 204;
}));

app.listen(3000, console.log('Koa:', 3000));