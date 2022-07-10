const mysql= require("mysql2")
const connection = mysql.createConnection(
    {
        host:"laikamapp.ckhz69bbmbfc.eu-west-3.rds.amazonaws.com",
        user:"admin",
        password:"Laikamapp1!",
        database:"laikamapp"
    }
);

connection.connect(function(error){
    if (error){
        console.log(error);
    }else{
            console.log("Conexión correcta")
    }
});

module.exports= connection;
