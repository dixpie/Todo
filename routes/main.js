const express = require('express');
const router = express.Router();
const mainC = require('../controllers/main');
router.get("/", mainC.get)


module.exports = router;