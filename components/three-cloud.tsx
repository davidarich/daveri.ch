import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// Component to render Cloud 3D model via Three.js
const ThreeCloud = () => {
    const mount = useRef(null)
    let cloud = new THREE.Object3D;

    useEffect(() => {
        let width = 300
        let height = 300
        let frameId = 0

        const loader = new OBJLoader()
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const cloudMat = new THREE.MeshBasicMaterial({
            color: 0x00CCFF,
        })

        /*
          Model loader event functions
        */
        const onLoad = (object: THREE.Object3D<THREE.Event>) => {
            cloud = object
            cloud.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = cloudMat;
                }
            });
            scene.add(cloud);
            start()
        }
        const onProgress = (xhr: { loaded: number; total: number; }) => {
            console.log((xhr.loaded / xhr.total * 100) + '%');
        }
        const onError = (error: any) => {
            console.log('An error occurred:')
            console.error(error)
        }

        /*
            Three.js render lifecycle functions
        */
        const renderScene = () => {
            renderer.render(scene, camera)
        }
        const handleResize = () => {
            // width = mount.current.clientWidth
            // height = mount.current.clientHeight
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderScene()
        }
        const animate = () => {
            cloud.rotation.y += 0.02
            renderScene()
            frameId = window.requestAnimationFrame(animate)
        }
        const start = () => {
            if (!frameId) {
                frameId = requestAnimationFrame(animate)
            }
        }
        const stop = () => {
            cancelAnimationFrame(frameId)
            frameId = 0
        }

        loader.load('models/Cloud_3.obj', onLoad, onProgress, onError);
        camera.position.z = 4
        renderer.setClearColor('#222222')
        renderer.setSize(width, height)

        if (mount.current) {
            //@ts-ignore
            mount.current.appendChild(renderer.domElement)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            stop()
            window.removeEventListener('resize', handleResize)
            if (mount.current) {
                //@ts-ignore
                mount.current.removeChild(renderer.domElement)
            }
            scene.remove(cloud)
            geometry.dispose()
        }
    }, [])

    useEffect(() => {
    }, [])

    return <div className="threecloud" ref={mount} />
}
export default ThreeCloud
