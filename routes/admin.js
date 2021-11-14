const express = require('express');
const router = express.Router();
const adminC = require('../controllers/admin');
router.post("/new", adminC.create)
router.get("/delete/:id", adminC.delete)
router.get("/completed/:id", adminC.completed)


module.exports = router;