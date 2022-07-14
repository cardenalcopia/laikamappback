const { request } = require("express");
const connection =require("../database")
function getAllPipi(request,response)
{
    let sql = "SELECT * FROM pipican  ";
    

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

}
function getOnePipi(request,response)
{
    let sql =  "SELECT * FROM pipican WHERE id_pipican='" + request.query.id_pipican +"'";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

}

module.exports={getAllPipi,getOnePipi}