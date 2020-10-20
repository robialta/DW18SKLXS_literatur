const express = require("express");
const { register, login, checkAuth } = require("../controllers/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/auth", checkAuth);

module.exports = router;
