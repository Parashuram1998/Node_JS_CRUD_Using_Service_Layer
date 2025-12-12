const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.patch("/:id", userController.update);
router.delete("/:id", userController.delete);

module.exports = router;
