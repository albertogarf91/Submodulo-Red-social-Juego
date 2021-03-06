var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var mimeTypes = { "html": "text/html", "jpeg": "image/jpeg", "jpg": "image/jpeg", "png": "image/png", "js": "text/javascript", "css": "text/css", "swf": "application/x-shockwave-flash"};

var modulo = require('./ServidorJuego.js');

//Datos del servidor
var NombreUsuarios = [];
var PassUsuarios = [];
var UsuariosRegistrados=0;

this.calcular = function (operacion) {
	if (operacion=="Jupiter"){
		return "Respuesta correcta";
	} 
	else return "Respuesta incorrecta";
}

var httpServer = http.createServer(
	function(request, response) {
		var uri = url.parse(request.url).pathname;
		if (uri=="/") uri = "/views/Juego.html";
		var fname = path.join(process.cwd(), uri);
		fs.exists(fname, function(exists) {
			if (exists) {
				fs.readFile(fname, function(err, data){
					if (!err) {
						var extension = path.extname(fname).split(".")[1];
						var mimeType = mimeTypes[extension];
						response.writeHead(200, mimeType);
						response.write(data);
						response.end();
					}
					else {
						response.writeHead(200, {"Content-Type": "text/plain"});
						response.write('Error de lectura en el fichero: '+uri);
						response.end();
					}
				});
			}
			else{
				while (uri.indexOf('/') == 0) uri = uri.slice(1);
				var params = uri.split("/");
				if (params.length >= 1) { //REST Request
					console.log("Peticion REST: "+uri);
					//var val1 = parseFloat(params[1]);
					//var val2 = parseFloat(params[2]);
					//var result = calcular(params[0], val1, val2);
					var result = modulo.calcular(params[0]);
					response.writeHead(200, {"Content-Type": "text/html"});
					response.write(result.toString());
					response.end();
				}
				else {
					console.log("Peticion invalida: "+uri);
					response.writeHead(200, {"Content-Type": "text/plain"});
					response.write('404 Not Found\n');
					response.end();
				}
			}
		});		
	}
);
httpServer.listen(process.env.PORT || 5000, process.env.IP || "0.0.0.0");
console.log("Servicio HTTP iniciado");
