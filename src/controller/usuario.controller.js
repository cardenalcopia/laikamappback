const { request } = require("express");
const connection =require("../database")
function getStart(request, response){

    let respuesta = {error: true, codigo:200, mensaje: 'Punto de inicio'}; 
    response.send(respuesta);
    // next();
}
// function getStart(request, response){

//     let respuesta = {error: true, codigo:200, mensaje: 'Punto de inicio'}; 
//     response.send(respuesta);
//     // next();
// }

// function postUser(request,response)
// {
//     console.log(request.body)
//     let sql= "INSERT INTO usuario (nombre,apellidos,correo,foto,password)" +
//         "VALUES ('"+ request.body.nombre+ "','" + request.body.apellidos +"','" + request.body.correo +"','"+ request.body.foto+"','"+ request.body.password+"')"
//         console.log(sql);
//         connection.query(sql, function(err,result )
//         {
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(result)
//                 if(result.insertId)
//                 {
//                     response.send(String(result.insertId))
//                 }else {
//                     response.send("-1")
//                 }
//             }
//         })
// }
// function postLogin(request,response)
// {
//     sql = "SELECT id_usuario, nombre, apellidos, correo, foto FROM usuario WHERE (correo= '"+ request.body.correo+"'AND password= '"+request.body.password+"')" 
//     connection.query(sql, function(err,result )
//     {
//         if(err){
//             console.log(err)
//         }else{
//             if (result.length==0)
//             {
//                 let jsonerror ={
//                     error:true,
//                     message:"Datos incorrectos",
//                     result:result}
//                 response.send(jsonerror)
               
//             }else{
//                 let jsoncorrecto={
//                     error:false,
//                     message:"Datos correctos",
//                     result:result
//                 }
//                   console.log(result)
//                   response.send(jsoncorrecto);
//             }
           
//         }
//     })
// }


    
   

module.exports={getStart}