const express= require("express")
const cors = require("cors")

const userRouters = require("./routers/users.routers")
const chatsRouters = require("./routers/chats.router")
const converRouters = require("./routers/conversacion.router")
const activRouters = require("./routers/actividades.router")
const pipiRouters = require ("./routers/pipicanes.router")
const errorHandling= require ("./error/errorHandling")
const app = express();



app.set("port",process.env.PORT || 3000 || 3306)

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(userRouters);
app.use(chatsRouters);
app.use(converRouters);
app.use(activRouters);
app.use(pipiRouters);


app.use(function(req,res,next){
    res.status(404).json({
        error:true,
        codigo:404,
        mensaje:"endpoint doesnt found"
    })
    
})
app.use(errorHandling);
module.exports=app;
