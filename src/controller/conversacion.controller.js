const { request } = require("express");
const connection =require("../database")
function getConv(request,response){
    
    let sql = "SELECT * FROM conversacion "
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
function convPost(request,response)
{
    console.log(request.body)
    let sql= "INSERT INTO conversacion (emisor,mensaje,id_usuario,id_chat)" +
        "VALUES ('"+ request.body.emisor+ "','" + request.body.mensaje +"','" + request.body.id_usuario+"','"+ request.body.id_chat+"')"
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

module.exports={getConv,convPost}