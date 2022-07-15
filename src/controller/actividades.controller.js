const { request } = require("express");
const connection =require("../database")
function getAllActi(request,response)
{
    let sql = "SELECT * FROM actividades WHERE tipo='" + request.query.tipo +"' ORDER BY maxperros ASC LIMIT 5 ";/*repasar el orden */
    

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

}
function getOneActi(request,response)
{
    let sql =  "SELECT * FROM actividades WHERE id_actividades='" + request.query.id_actividades +"' AND id_usuario='" + request.query.id_usuario +"'";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

}
function postActiv(request,response)
{
    let sql = "INSERT INTO actividades (imagen,titulo,tipo,fecha,hora,precio,localizacion,maxperros,informacion,id_usuario)" + 
    "VALUES ('" + request.body.imagen + "', '" +
                    request.body.titulo + "', '" +
                    request.body.tipo + "', '" +
                    request.body.fecha + "', '" +
                    request.body.hora + "', '" +
                    request.body.precio + "', '" +
                    request.body.localizacion + "', '" +
                    request.body.maxperros + "', '" +
                    request.body.informacion + "', '" +
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
function getApun(request,response)
{
    let sql = "SELECT  usuario.nombre, actividades.titulo, actividades.tipo, actividades.fecha, actividades.hora, actividades.localizacion FROM actividades JOIN apuntadas ON (actividades.id_actividades = apuntadas.id_actividades) JOIN usuario ON (apuntadas.id_usuario= usuario.id_usuario) WHERE usuario.id_usuario='" + request.query.id_usuario + "'"
    

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });
}
function postApun ( request,response)
{
    let sql ="INSERT INTO apuntadas (id_actividad,id_usuario)"+
    "VALUES ('" + request.body.id_actividades + "', '" +
    request.body.id_usuario+ "')"; 
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
function delApun (request,response)
{
let sql = "DELETE FROM apuntadas WHERE(id_actividades ='"+request.query.id_actividades+"'AND id_usuario= '"+request.query.id_usuario+"')"
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
function getCreadas2 ( request,response)
{
    let sql = " SELECT actividades.titulo , actividades.tipo ,actividades.fecha ,actividades.localizacion,actividades.informacion ,usuario.nombre, usuario.apellidos FROM actividades JOIN usuario ON(actividades.id_usuario = usuario.id_usuario) WHERE actividades.id_usuario= '"+request.query.id_usuario+"' "
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
function getCreadas ( request,response)
{
    let sql = " SELECT actividades.titulo , actividades.tipo ,actividades.fecha ,actividades.localizacion,actividades.informacion ,usuario.nombre, usuario.apellidos FROM actividades JOIN usuario ON(actividades.id_usuario = usuario.id_usuario) WHERE actividades.id_usuario= '"+request.query.id_usuario+"' "
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
function putCreadas(request,response)
{
    let id_actividad = request.body.id_actividad ? request.body.id_actividad : null;
    let imagen = request.body.imagen? request.body.imagen:null;
    let titulo = request.body.titulo ? request.body.titulo: null;
    let tipo = request.body.tipo ? request.body.tipo : null;
    let fecha = request.body.fecha ? request.body.fecha : null;
    let hora = request.body.hora ? request.body.hora : null;
    let precio = request.body.precio ? request.body.precio : null;
    let localizacion = request.body.localizacion ? request.body.localizacion : null;
    let maxperros = request.body.maxperros ? request.body.maxperros : null;
    let informacion = request.body.informacion ? request.body.informacion : null;
    let id_usuario = request.body.id_usuario ? request.body.id_usuario : null;
   
    let params =[imagen,titulo,tipo,fecha,hora,precio,localizacion,maxperros,informacion,id_usuario,id_actividad,]
    let sql = "UPDATE actividades SET imagen = COALESCE(?, imagen) , " + 
    "titulo = COALESCE(?, titulo), " + "tipo = COALESCE(?, tipo), "+ "fecha = COALESCE(?, fecha), " + 
    "hora = COALESCE(?, hora), " + "precio = COALESCE(?, precio)," +
    "localizacion = COALESCE(?, localizacion), " + "maxperros = COALESCE(?, maxperros), "+ "informacion = COALESCE(?, informacion)," + " id_usuario = COALESCE(?, id_usuario)   WHERE id_actividades = ?";
    console.log(sql); 
    connection.query(sql, params,function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            console.log("Actividad modificada");
            response.send(result);
        }
    })
    
}

module.exports={getAllActi,getOneActi,postActiv,getApun,postApun,delApun,getCreadas,putCreadas,getCreadas2}