import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


//SETUP scene
const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}
// 

//SETUP canvas and perspective camera
const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)

// object1.updateMatrixWorld()
// object2.updateMatrixWorld()
// object3.updateMatrixWorld()

//SETUP renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const controls = new OrbitControls(camera, canvas)

const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff00cc' })
)
object1.position.x = -1.5

const object2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff00cc' })
)
object2.position.x = 2


const object3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff00cc' })
)

scene.add(object1, object2, object3)

const raycaster = new THREE.Raycaster()
//ray will start somewhere on left of the spheres
// const rayOrigin = new THREE.Vector3(- 3, 0, 0) //(left of last sphere)
// //right (positive x)
// const rayDirection = new THREE.Vector3(10, 0, 0)  //reduce magnitude BUT keep direction 
// rayDirection.normalize()
// raycaster.set(rayOrigin, rayDirection) //raycaster has been oriented
// //cast a ray - check intersection with ONLY object 1

// const intersect = raycaster.intersectObject(object1)
// console.log(intersect)
//cast a ray - check intersection with obj1, obj2 and obj 3 
// const intersects = raycaster.intersectObjects([object1, object2, object3])
// console.log(intersects)

//do everything before the animate
window.requestAnimationFrame(animate);

function animate(timer) {
    controls.update();

    object1.position.y = Math.sin(timer / 1000 * .5) * 3
    object2.position.y = Math.sin(timer / 1000 * .4) * 3
    object3.position.y = Math.sin(timer / 1000 * .3) * 3

    raycaster.setFromCamera(mouse, camera);

    //add objects to an array to test collision
    const objectsToTest = [object1, object2, object3]

    //reset all the object to red
    for (const object of objectsToTest) {
        object.material.color.set('#ff00cc')
    }
    //test collision
    const intersects = raycaster.intersectObjects(objectsToTest)
    for (const intersect of intersects) {
        intersect.object.material.color.set('#ae00ff')
    }
    renderer.render(scene, camera);
    // console.log(intersects)
    window.requestAnimationFrame(animate);
}

//define mouse variable
let mouse = { x: 0, y: 0 }
window.addEventListener("mousemove", function (event) {
    mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
    // console.log(mouse);
});
