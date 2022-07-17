const {Router} = require("express");
const router = Router();
const pipiCtrl = require("../controller/pipicanes.controller")
router.get("/cards-pipicanes",pipiCtrl.getAllPipi)
router.get("/pipicanCard",pipiCtrl.getOnePipi)
router.get("/home",pipiCtrl.getMapaPipi)
router.post("/pipicanCard",pipiCtrl.postRating)
router.get("/pipicanCard",pipiCtrl.getAvg)
router.put("/pipicanCard",pipiCtrl.putRating)

module.exports=router;