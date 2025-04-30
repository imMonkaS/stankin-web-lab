const express = require('express')

const router = express.Router();

const user_router = require("./users")
router.use('/user', user_router)

const product_router = require("./product")
router.use('/product', product_router)

module.exports = router;
