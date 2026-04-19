const express = require("express");
const fromcontroller = require("../controller/rootcontroller");
const router = express.Router();

router.get("/", fromcontroller.showall);

router.get("/:id", fromcontroller.pickid);

router.post("/", fromcontroller.addit);

router.delete("/:id", fromcontroller.delit);

module.exports = router;
