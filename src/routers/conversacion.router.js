const {Router} = require("express");
const router = Router();
const convCtrl = require("../controller/conversacion.controller")
router.get("/chats",convCtrl.getConv)
router.post("/chats",convCtrl.convPost)

module.exports=router;