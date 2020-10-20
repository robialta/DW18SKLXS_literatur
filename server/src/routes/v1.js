const express = require("express");
const { register, login, checkAuth } = require("../controllers/auth");
const {
    getLiteratures,
    addLiterature,
    searchLiterature,
    myLiteratures,
} = require("../controllers/literature");
const { authenticated } = require("../middleware/authentication");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/auth", authenticated, checkAuth);

router.get("/literatures", authenticated, getLiteratures);
router.post("/literature", authenticated, addLiterature);
router.post("/search", authenticated, searchLiterature);
router.get("/myliteratures/:id", authenticated, myLiteratures);

module.exports = router;
