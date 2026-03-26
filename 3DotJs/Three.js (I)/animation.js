// library ref: because we are loading a module
import * as THREE from 'three';

//SCENE
const scene = new THREE.Scene()
const loader = new THREE.TextureLoader();

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -2

const sizes = {
    width: 800,
    height: 600
}

/**OBJECT TRANSFORMATIONS
 * position (to move the object)
 * scale (to resize the object)
 * rotation (to rotate the object)
*/

//POSITION
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)
//move it 
axesHelper.position.x = -1;
axesHelper.position.y = -1;

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //prefixed with THREE, to make it clear they're all objects from same library; three.js
scene.add(camera)
//move camera -- position property has x,y and z
//X = left, right ; Y = up, down ; Z = front, back
camera.position.z = 3

/**RENDERING */
//Access the Canvas
const canvas = document.querySelector('canvas#three-ex')

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
}) //helps render the 3D

//give it the size
renderer.setSize(sizes.width, sizes.height)

window.requestAnimationFrame(animate)
let elapsedTime = 0
function animate(timer) {

    let deltaTime = timer - elapsedTime
    elapsedTime = timer //update  new elapsedTime
    //console.log(deltaTime)

    // mesh.rotation.x += 0.01
    // mesh.rotation.y += 0.01 * deltaTime
    // mesh.rotation.z += 0.01
    // Update objects -> elapsed time increases ...
    // mesh_2.position.x = Math.cos(elapsedTime / 1000)
    // mesh_2.position.y = Math.sin(elapsedTime / 1000)

    camera.position.x = Math.cos(elapsedTime / 1000)
    camera.position.y = Math.sin(elapsedTime / 1000)


    //render every fame
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)

}

