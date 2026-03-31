// library ref: because we are loading a module
import * as THREE from 'three';

//SCENE
const scene = new THREE.Scene()

//A: the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1)
//B: the material
const material = new THREE.MeshBasicMaterial({ color: 0x800080 })
//C: put together
const mesh = new THREE.Mesh(geometry, material)

//adding cube in different position
const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = 1.5
mesh_2.position.y = 1.25
mesh_2.position.z = -1

//D: add to the scene
scene.add(mesh)
scene.add(mesh_2)

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

//SCALE
// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5

//ROTATION
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
mesh_2.rotation.x = Math.PI * 0.25
mesh_2.rotation.y = Math.PI * 0.25

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) //prefixed with THREE, to make it clear they're all objects from same library; three.js
scene.add(camera)
//move camera -- position property has x,y and z
//X = left, right ; Y = up, down ; Z = front, back
camera.position.z = 3
//lookAt -- automatically rotates its -z axis toward the target provided
// camera.lookAt(new THREE.Vector3(0, - 1, 0))
camera.lookAt(mesh_2.position)

/**RENDERING */
//Access the Canvas
const canvas = document.querySelector('canvas#three-ex')

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
}) //helps render the 3D

//give it the size
renderer.setSize(sizes.width, sizes.height)


//render
//cannot put anything under render, as it will not be rendered in the Live version
renderer.render(scene, camera) //render the scene from its camera pointview