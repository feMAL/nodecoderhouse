const Container = require('./class/container');

const file = new Container('documento');
const obj = { message: "hello world" };

file.save(obj)