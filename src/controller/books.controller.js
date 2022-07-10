// const { request } = require("express");
// const connection =require("../database")
// function getAll(request,response)
// {
//     let sql;

//     if(request.query.id_usuario){
//         sql = "SELECT id_libro, titulo, tipo, autor, precio, libro.foto FROM libro WHERE id_usuario='" + request.query.id_usuario +"'";
//     }else if(request.query.id_usuario && request.query.id_libro){
//         sql = "SELECT id_libro, id_usuario, titulo, tipo, autor, precio, libro.foto FROM libro WHERE libro.id_libro='" + request.query.id_libro +"' AND id_usuario='" + request.query.id_libro +"'";
//     }

//     connection.query(sql, (err, result) => {
//         if(err){
//             console.log(err);
//         }
//         else{
//             response.send(result);
//         }
//     });

// }
//     // console.log(request.query.id_usuario)
    
//     // if (request.query.id_usuario=="")
//     // {
//     //      sql = "SELECT* FROM libro WHERE id_usuario='" + request.query.id_usuario +  "'" 
//     // connection.query(sql, function(err,result )
//     // {
//     //     if(err){
//     //         console.log(err)
//     //     }else{
//     //         if (result.length==0)
//     //         {
//     //             let jsonerror =[{
//     //                 error:true,
//     //                 message:"Datos incorrectos",
//     //                 result:result}]
//     //             response.send(jsonerror)
               
//     //         }else{
//     //             let jsoncorrecto=[{
//     //                 error:false,
//     //                 message:"Datos correctos",
//     //                 resutl:result
//     //             }]
//     //               console.log(result)
//     //               response.send(jsoncorrecto);
//     //         }
           
//     //     }
//     // })
//     // }else{
//     //     sql = "SELECT id_libro, id_usuario, titulo, tipo, autor, precio, libro.foto FROM libro WHERE libro.id_libro='" + request.query.id_libro +"' AND id_usuario='" + request.query.id_libro +"'";
//     //     connection.query(sql, function(err,result )
//     // {
//     //     if(err){
//     //         console.log(err)
//     //     }else{
//     //         if (result.length==0)
//     //         {
//     //             let jsonerror =[{
//     //                 error:true,
//     //                 message:"Datos incorrectos",
//     //                 result:result}]
//     //             response.send(jsonerror)
               
//     //         }else{
//     //             let jsoncorrecto=[{
//     //                 error:false,
//     //                 message:"Datos correctos",
//     //                 resutl:result
//     //             }]
//     //               console.log(result)
//     //               response.send(jsoncorrecto);
//     //         }
           
//     //     }
//     // })
//     // }
   

// function postBooks(request,response){
//     console.log(request.body);

//     let sql = "INSERT INTO libro (id_usuario, titulo, tipo, autor, precio, foto)" + 
//     "VALUES ('" + request.body.id_usuario + "', '" +
//                     request.body.titulo + "', '" +
//                     request.body.tipo + "', '" +
//                     request.body.autor + "', '" +
//                     request.body.precio + "', '" +
//                     request.body.foto + "')"; 

//     console.log(sql);
//     connection.query(sql, (err, result) => {
//         if( err ){
//             console.log( err );
//         }
//         else{
//             console.log(result);
//             if(result.insertId){
//                 response.send(String(result.insertId));
//             }
//             else{
//                 response.send(result);
//             }
//         }
//     })
// }
// function putBooks(request, response){

//     let id = request.body.id_libro ? request.body.id_libro : null;
//     let mitipo= request.body.tipo? request.body.tipo:null;
//     let idUsuario = request.body.id_usuario ? request.body.id_usuario: null;
//     let titulo = request.body.titulo ? request.body.titulo : null;
//     let autor = request.body.autor ? request.body.autor : null;
//     let precio = request.body.precio ? request.body.precio : null;
//     let foto = request.body.foto ? request.body.foto : null;

//     let params = [idUsuario, titulo,mitipo, autor, precio, foto, id]
//     let sql = "UPDATE libro SET id_usuario = COALESCE(?, id_usuario) , " + 
//                "titulo = COALESCE(?, titulo), " + "tipo = COALESCE(?, tipo), "+ "autor = COALESCE(?, autor), " + 
//                "precio = COALESCE(?, precio), " + "foto = COALESCE(?, foto)  WHERE id_libro = ?";
//     console.log(sql); 
//     connection.query(sql, params,function (err, result) 
//     {
//         if (err) 
//             console.log(err);
//         else 
//         {
//             console.log("Libro modificado");
//             response.send(result);
//         }
//     })
// }

// function delBooks(request,response)
// {
//     if (request.query.id_libro!=""){
//         let sql ="DELETE FROM libro WHERE id_libro = "+ request.query.id_libro;
//    console.log(sql); 
//    connection.query(sql,function (err, result) 
//    {
//        if (err) {
//            console.log(err);
//        } else {
//            console.log(result);
//            if (result.insertId)
//                response.send(String(result.insertId))
//            else
//                response.send(result)
//        }

//    })
// }
// }
// module.exports={getAll,postBooks,putBooks,delBooks}
