const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.homePage);
router.all("/Feed", controller.Feed);
router.get("/Feed/:id", controller.showMessage);
router.all("/Feed/edit/:id", controller.editMessage);
router.get("/delete-post/:id", controller.deleteMessage)
module.exports = router;
