const {Router} = require("express");
const router = Router();
const userCtrl = require("../controller/usuario.controller")


router.get("/", userCtrl.getStart);
router.post("/registro", userCtrl.postUser);
router.post("/login", userCtrl.postLogin)
// const bookCtrl= require("../controller/books.controller");
// // router.get("/libros?id_libro=&id_usuario",bookCtrl.getAll)
// router.get("/libros",bookCtrl.getAll)

// router.post("/anadir",bookCtrl.postBooks);
// router.put("/modificar",bookCtrl.putBooks);
// router.delete("/libros",bookCtrl.delBooks)
module.exports=router;