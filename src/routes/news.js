const express = require("express");

var router = express.Router();

const newsController = require("../app/controllers/newController");

router.get("/:slug", newsController.show);

router.get("/", newsController.index);

// newsController.index

module.exports = router;
