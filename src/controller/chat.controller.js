const { request } = require("express");
const connection =require("../database")
function getChats(request,response){
   
    let sql = "SELECT * FROM chat WHERE id_creador = "+request.query.id_usuario+"OR id_usuario ="+ request.query.id_usuario
    connection.query(sql, function(err,result )
            {
                if(err){
                    console.log(err)
                }else{
                    console.log(result)
                    if(result)
                    {
                        response.send(result)
                    }else {
                        response.send("-1")
                    }
                }
            })

}
function postChats(request,response)
 {
        console.log(request.body)
        let sql= "INSERT INTO chat (titulo,creador,id_usuario)" +
            "VALUES ('"+ request.body.titulo+ "','" + request.body.creador +"','" + request.body.id_usuario +"')"
            console.log(sql);
            connection.query(sql, function(err,result )
            {
                if(err){
                    console.log(err)
                }else{
                    console.log(result)
                    if(result.insertId)
                    {
                        response.send(String(result.insertId))
                    }else {
                        response.send("-1")
                    }
                }
            })
    }

module.exports={getChats,postChats}