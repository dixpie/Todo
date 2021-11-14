const Todo = require('../model/Todo');
exports.get = async (req, res) => {
    const todo = await Todo.find()
    res.render("index", {
        todo,
        clangs: req.params.clang || "en"
    })
}