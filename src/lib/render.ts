import * as THREE from 'three'
import type { PerspectiveCamera, Scene, WebGLRenderer } from 'three'

import Image from './06_Durain_Farm.jpeg'

let camera: PerspectiveCamera
let scene: Scene
let renderer: WebGLRenderer

let isUserInteracting = false
let onPointerDownMouseX = 0
let onPointerDownMouseY = 0
let lon = 0
let onPointerDownLon = 0
let lat = 0
let onPointerDownLat = 0
let phi = 0
let theta = 0

// init();
// animate();

export function init(container: HTMLDivElement) {
  // const container = document.getElementById("container");

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1100,
  )

  scene = new THREE.Scene()

  const geometry = new THREE.SphereGeometry(500, 60, 40)
  // invert the geometry on the x-axis so that all of the faces point inward
  geometry.scale(-1, 1, 1)

  const texture = new THREE.TextureLoader().load(Image)
  // const texture = new THREE.TextureLoader().load(
  //   'https://fruits-public.obs.cn-southwest-2.myhuaweicloud.com/assets/var-001/06_Durain_Farm.jpg',
  // )
  const material = new THREE.MeshBasicMaterial({ map: texture })

  const mesh = new THREE.Mesh(geometry, material)

  scene.add(mesh)

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.appendChild(renderer.domElement)

  container.style.touchAction = 'none'
  container.addEventListener('pointerdown', onPointerDown)

  document.addEventListener('wheel', onDocumentMouseWheel)

  //

  document.addEventListener('dragover', function (event) {
    event.preventDefault()
    if (event?.dataTransfer?.dropEffect) {
      event.dataTransfer.dropEffect = 'copy'
    }
  })

  document.addEventListener('dragenter', function () {
    document.body.style.opacity = '0.5'
  })

  document.addEventListener('dragleave', function () {
    document.body.style.opacity = '1'
  })

  document.addEventListener('drop', function (event) {
    event.preventDefault()

    const reader = new FileReader()
    reader.addEventListener('load', function (_event) {
      if (material.map) {
        if (material.map?.image) {
          material.map.image.src = _event?.target?.result
        }
        material.map.needsUpdate = true
      }
      // material?.map?.image.src = _event?.target?.result
      // material.map.needsUpdate = true
    })

    if (event?.dataTransfer?.files?.[0]) {
      reader.readAsDataURL(event.dataTransfer.files[0])
    }

    document.body.style.opacity = '1'
  })

  //

  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onPointerDown(event: PointerEvent) {
  if (event.isPrimary === false) return

  isUserInteracting = true

  onPointerDownMouseX = event.clientX
  onPointerDownMouseY = event.clientY

  onPointerDownLon = lon
  onPointerDownLat = lat

  document.addEventListener('pointermove', onPointerMove)
  document.addEventListener('pointerup', onPointerUp)
}

function onPointerMove(event: PointerEvent) {
  if (event.isPrimary === false) return

  lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon
  lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat
}

function onPointerUp(event: PointerEvent) {
  if (event.isPrimary === false) return

  isUserInteracting = false

  document.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerup', onPointerUp)
}

function onDocumentMouseWheel(event: WheelEvent) {
  const fov = camera.fov + event.deltaY * 0.05

  camera.fov = THREE.MathUtils.clamp(fov, 10, 75)

  camera.updateProjectionMatrix()
}

export function animate() {
  requestAnimationFrame(animate)
  update()
}

function update() {
  if (isUserInteracting === false) {
    lon += 0.1
  }

  lat = Math.max(-85, Math.min(85, lat))
  phi = THREE.MathUtils.degToRad(90 - lat)
  theta = THREE.MathUtils.degToRad(lon)

  const x = 500 * Math.sin(phi) * Math.cos(theta)
  const y = 500 * Math.cos(phi)
  const z = 500 * Math.sin(phi) * Math.sin(theta)

  camera.lookAt(x, y, z)

  renderer.render(scene, camera)
}
