const {Router} = require("express");
const router = Router();
const activCtrl = require("../controller/actividades.controller")
router.get("/cards-actividades",activCtrl.getAllActi)
router.get("/actividadCard",activCtrl.getOneActi)
router.post("/crear",activCtrl.postActiv)
router.get("/apuntadas",activCtrl.getApun)
router.post("/actividadCard",activCtrl.postApun)
router.delete("/apuntadas",activCtrl.delApun)
router.get("/creadas",activCtrl.getCreadas2)
router.get("/modificar",activCtrl.getCreadas)
router.put("/modificar",activCtrl.putCreadas)
module.exports=router;