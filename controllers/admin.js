const Todo = require('../model/Todo');

exports.create = async (req, res) => {
    if (!req.body) return res.redirect("/");
    Todo.create({
        ...req.body
    });
    res.redirect("/");
}

exports.delete = async (req, res) => {
    const todo = req.params.id;
    await Todo.deleteOne({
        _id: todo
    })
    res.redirect("/")
}

exports.completed = async (req, res) => {
    const todo = await Todo.findOne({
        _id: req.params.id
    })
    todo.completed = true;
    await todo.save()
    res.redirect("/")

}