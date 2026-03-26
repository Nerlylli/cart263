// library ref: because we are loading a module
import * as THREE from 'three';

//SCENE
const scene = new THREE.Scene()
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
cube1.position.x = -2
group.add(cube1)

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(.75, 32, 16),
    new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
)
sphere.position.y = -1.5
sphere.position.x = 1
group.add(sphere)


group.position.x = -2
// group.rotation.x = Math.PI * .25
// group.scale.x = .5
// group.scale.y = .5
// group.scale.z = .5
// group.scale.set(.5, .5, .5)

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


//render
//cannot put anything under render, as it will not be rendered in the Live version
renderer.render(scene, camera) //render the scene from its camera pointview