const { request } = require("express");
const connection =require("../database")
function getAllPipi(request,response)
{
    let sql = "SELECT * FROM pipican ORDER BY id_pipican ASC LIMIT 5 ";
    

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
    
    // let sql =  "SELECT * FROM pipican WHERE id_pipican='" + request.query.id_pipican +"'";
    let sql = 'SELECT AVG(calificacion) AS marks FROM rating WHERE id_pipican =' + request.query.id_pipican
    
    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

}


function getMapaPipi(request,response)
{
    let sql =  "SELECT * FROM pipican";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

}

function postRating(request, response){

    let sql = "INSERT INTO rating (id_pipican, calificacion, id_usuario)" + 
    "VALUES ('" + request.body.id_pipican + "', '" +
                    request.body.calificacion + "', '" +
                    request.body.id_usuario + "')"; 
                    console.log(sql);
                    connection.query(sql, (err, result) => {
                        if( err ){
                            console.log( err );
                        }
                        else{
                            console.log(result);
                            if(result){
                                response.send(result);
                            }
                            else{
                                response.send(result);
                            }
                        }
                    })
}

function getAvg(request, response){
    
    let id = request.query.id_pipican

    let sql = 'SELECT AVG(calificacion) FROM rating WHERE id_pipican =' + id

    console.log(sql);

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });
}

function putRating(request, response){

    let id_pipican = request.body.id_pipican ? request.body.id_pipican : null;
    let rating = request.body.rating ? request.body.rating : null;
    console.log(id_pipican);
    console.log(rating);
   
    let params =[rating,id_pipican]
    let sql = "UPDATE pipican SET pipican.rating = COALESCE(?, pipican.rating) WHERE id_pipican = ?";
    console.log(sql); 
    connection.query(sql, params,function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            console.log("Pipican modificado");
            response.send(result);
        }
    })

}
module.exports={getAllPipi,getOnePipi, getMapaPipi, postRating, getAvg, putRating}