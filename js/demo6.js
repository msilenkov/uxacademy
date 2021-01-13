var canvas = document.querySelector('#scene1');

var width = canvas.offsetWidth,
    height = canvas.offsetHeight;

var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
	alpha: true,
    antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
renderer.setSize(width, height);
renderer.setClearColor(0x000000, 0);

var scene = new THREE.Scene();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var camera = new THREE.PerspectiveCamera(7, width / height, 20, 500);
camera.position.set(40, 0, 280);
=======
var camera = new THREE.PerspectiveCamera(10, width / height, 20, 500);
=======
var camera = new THREE.PerspectiveCamera(40, width / height, 0.6, 1000);
>>>>>>> parent of f6cba70... Update demo6.js
=======
var camera = new THREE.PerspectiveCamera(200, width / height, 0.1, 1000);
>>>>>>> parent of 91d781b... Update demo6.js
camera.position.set(0, 0, 280);
>>>>>>> parent of 868d67f... Update demo6.js

var sphere = new THREE.Group();
scene.add(sphere);
var mat1 = new THREE.LineBasicMaterial({
    color:0x012762
});
var mat2 = new THREE.LineBasicMaterial({
    color:0x012762
});

<<<<<<< HEAD
var radius = 200;
var lines = 60;
var dots = 60;
=======
var radius = 100;
var lines = 50;
var dots = 50;
>>>>>>> parent of 09c7f03... Update demo6.js
for(var i = 0; i < lines; i++) {
    var geometry = new THREE.Geometry();
    var line = new THREE.Line(this.geometry, (Math.random()>0.2)?mat1:mat2);
    line.speed = Math.random() * 800 + 250;
    line.wave = Math.random();
    line.radius = Math.floor(radius + (Math.random()-0.5) * (radius*0.2));
    for(var j=0;j<dots;j++){
        var x = ((j/dots) * line.radius * 2) - line.radius;
        var vector = new THREE.Vector3(x, 0, 0);
        geometry.vertices.push(vector);
    }
    line.rotation.x = Math.random() * Math.PI;
    line.rotation.y = Math.random() * Math.PI;
    line.rotation.z = Math.random() * Math.PI;
    sphere.add(line);
}

function updateDots (a) {
    var i, j, line, vector, y;
    for(i=0;i<lines;i++){
        line = sphere.children[i];
        for(j=0;j<dots;j++){
            vector = sphere.children[i].geometry.vertices[j];
            var ratio = 1 - ((line.radius - Math.abs(vector.x)) / line.radius);
            y = Math.sin(a/line.speed + j*0.15) * 12 * ratio;
            vector.y = y;
        }
        line.geometry.verticesNeedUpdate = true;
    }
}


function render(a) {
    requestAnimationFrame(render);
    updateDots(a);
    sphere.rotation.y = (a * 0.0001);
    sphere.rotation.x = (-a * 0.0001);
    renderer.render(scene, camera);
}

function onResize() {
    canvas.style.width = ;
    canvas.style.height = '';
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}


requestAnimationFrame(render);
var resizeTm;
window.addEventListener("resize", function(){
    resizeTm = clearTimeout(resizeTm);
    resizeTm = setTimeout(onResize, 200);
});
