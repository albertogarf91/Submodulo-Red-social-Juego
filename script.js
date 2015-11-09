var scene = new THREE.Scene(); //devuelve nodo escena
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000); //
var renderer = new THREE.WebGLRenderer();//almacena máquina virtual de opengl que ejecuta todos los métodos
var cube, sol,tierra,luna,pivotTierra,pivotSol,fondo;
var step=0;
var step2=0;
var activa=true;
var rotTierra=0;
var plane;
main();

function renderScene() {

step2+=0.005;
rotTierra += 0.01;

tierra.position.x = 10;
pivotTierra.position.x = 10;

if(activa){
	step+=0.01;
	pivotTierra.rotation.y = step * Math.PI / 3;
}
tierra.rotation.y = rotTierra*Math.PI;
pivotSol.rotation.y=step2 * Math.PI / 3;


requestAnimationFrame(renderScene);
renderer.render(scene, camera);
}

function main() {
	
document.addEventListener( 'mousedown', onDocumentMouseDown, false );
//colores de fondo y el alfa
renderer.setClearColor(0x0,0.1);  
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true; //sombras arrojadas (false no sombras)


// pivots objetos auxiliares para las rotaciones
//pivot sol se utilizará para girar la tierra alrededor del sol sin tener que hacer girar al sol
pivotSol = new THREE.Object3D();
//pivot tierra se utiliza para hacer girar a la luna alrededor de la luna sin depender de la rotación de la tierra.
pivotTierra = new THREE.Object3D();

fondo = crearAstro(60,0,"Universe.jpg",true,false);
scene.add(fondo);
 sol = crearAstro(5,0,"sun.gif",true,false);
 scene.add(sol); 
 sol.add(pivotSol);
 tierra = crearAstro(2,0,"tierra.jpg",false,true);
 pivotSol.add(tierra);
 pivotSol.add(pivotTierra);

 luna = crearAstro(0.5,3,"luna.jpg",false,true);
 pivotTierra.add(luna);

 
 
//Luz ambienta.
var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
//luz del sol
var pointLight = new THREE.PointLight( 0xffffff); //fuente de luz color blanca
pointLight.position.set( 0, 0, 0 ); //posición de la luz
scene.add(pointLight);
pointLight.castShadow=true; //genera sombras

// Añadir cámara
camera.position.x = 15;
camera.position.y = 15;
camera.position.z = 15;
camera.lookAt(scene.position);

$("#canvas").append(renderer.domElement);

renderScene();

/*****************************************INFORMACIÓN**************************************/
//hay 3 tipos de materiales para los objetos:
//lambertiano: no brillo 
//phong: tiene brillo
//basic: supone color, ni material ni textura.

//recordar que hay que poner los objetos que reciben sombra,
// los objetos que proyectan sombra.
//que la luz proyecta sombra.
/******************************************************************************************/
}

function crearAstro(radio,radio_orbita,textura,emisivo,recibeSombra){
// Añadir esfera
var sphereGeometry = new THREE.SphereGeometry(radio,50,50);
var sphereMaterial = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(textura)});
if(emisivo){
	sphereMaterial.side = THREE.BackSide;
}
sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
sphere.position.x=radio_orbita;
if(emisivo){
	sphere.castShadow=false;
}else{
	sphere.castShadow=true;
}
if(recibeSombra){
	sphere.receiveShadow=true;
}
sphere.name = "objeto-" + scene.children.length;

return sphere;	
}
function onDocumentMouseDown( event ) {                
	if(activa){
		activa = false;
	}else{
		activa = true;
	}
}
