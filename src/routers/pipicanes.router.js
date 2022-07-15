const {Router} = require("express");
const router = Router();
const pipiCtrl = require("../controller/pipicanes.controller")
router.get("/cards-pipicanes",pipiCtrl.getAllPipi)
router.get("/pipicanCard",pipiCtrl.getOnePipi)
router.get("/home",pipiCtrl.getMapaPipi)

module.exports=router;