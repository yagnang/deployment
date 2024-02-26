const express = require("express")

const { insert, update, deletea } = require("../controller/crudController")
const { requireSignin, isAdmin } = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/insert", insert)

router.patch("/update/:id", update)

router.delete("/delete/:id", deletea)

module.exports = router