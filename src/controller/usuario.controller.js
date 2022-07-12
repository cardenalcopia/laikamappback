const { request } = require("express");
const connection =require("../database")
function getStart(request, response){

    let respuesta = {error: true, codigo:200, mensaje: 'Punto de inicio'}; 
    response.send(respuesta);
    // next();
}

function postUser(request, response){

    console.log(request.body);
    let sql = "INSERT INTO usuario (nombre, apellidos, correo, num_perros, password)" + 
        "VALUES ('" + request.body.nombre + "', '" +
                        request.body.apellidos + "', '" +
                        request.body.correo + "', '" +
                        request.body.num_perros + "', '" +
                        request.body.password + "')"; 
    console.log(sql);
    connection.query(sql, function(err, result){

        if(err)
            console.log(err);
        else
        {
            console.log("Usuario añadido");
            console.log(result);
        }
        response.send(result)
    })

}

function postLogin(request, response){
    let sql; 
    let correo = request.body.correo;
    let password = request.body.password;

        // sql = 'SELECT id_usuario, nombre, apellidos, correo, foto FROM usuario WHERE (correo=' + correo + ' AND password=' + password + ')';

        sql = "SELECT id_usuario, nombre, apellidos, correo, num_perros FROM usuario WHERE (correo= '"+ correo +"'AND password= '"+ password +"')"

            connection.query(sql, function(err, result){

                if(err){
                    console.log(err);
                }else{
                    if(result.length>0){
                    console.log("Todos los Datos");
                    console.log(result);
                    let json = {
                        error: false,
                        message: "Datos correctos",
                        result: result
                    }
                    response.send(json)
                    }
                    else{
                        let json = {
                            error: true,
                            message: "Datos incorrectos",
                            result: result
                        }
                        response.send(json)
                    }
                }
            })
        
}  

function getPerfil(request, response){

    let sql = "SELECT nombre, apellidos, correo, num_perros, password FROM usuario WHERE id_usuario='" + request.query.id_usuario +"'";

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("Usuario mostrado");
            response.send(result);
        }
    });
}

function putPerfil(request, response){

    let idUsuario = request.body.id_usuario ? request.body.id_usuario: null;
    let nombre = request.body.nombre ? request.body.nombre : null;
    let apellidos = request.body.apellidos ? request.body.apellidos: null;
    let correo = request.body.correo ? request.body.correo : null;
    let nPerros = request.body.num_perros ? request.body.num_perros : null;
    let password = request.body.password ? request.body.password : null;
    
    let params = [nombre, apellidos, correo, nPerros, password, idUsuario]
    let sql = "UPDATE usuario SET nombre = COALESCE(?, nombre), " + 
                "apellidos = COALESCE(?, apellidos), " + 
               "correo = COALESCE(?, correo), " +  "num_perros = COALESCE(?, num_perros), " + 
               "password = COALESCE(?, password)  WHERE id_usuario = ?";
    console.log(sql); 
    connection.query(sql, params,function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {   
            console.log("Usuario modificado");
            response.send(result);
        }
    })

}

module.exports={getStart, postUser, postLogin, getPerfil, putPerfil}