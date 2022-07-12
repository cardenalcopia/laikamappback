const {Router} = require("express");
const router = Router();
const chatCtrl = require("../controller/chat.controller")
router.get("/listado-chats",chatCtrl.getChats)


module.exports=router;