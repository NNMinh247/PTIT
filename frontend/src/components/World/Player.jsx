import {useFrame, useThree} from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

const SPEED = 50;

export default function Player() {
    const {camera} = useThree();

    const moveForward = useRef(false);
    const moveBackward = useRef(false);
    const moveLeft = useRef(false);
    const moveRight = useRef(false);

    const direction = new THREE.Vector3();
    const velocity = new THREE.Vector3();

    useEffect(() => {
        const onKeyDown = (event) => {
            switch (event.code) {
                case 'KeyS': moveForward.current = true; break;
                case 'KeyW': moveBackward.current = true; break;
                case 'KeyA': moveLeft.current = true; break;
                case 'KeyD': moveRight.current = true; break;
                default: break;
            }
        };

    const onKeyUp = (event) => {
        switch (event.code) {
            case 'KeyS': moveForward.current = false; break;
            case 'KeyW': moveBackward.current = false; break;
            case 'KeyA': moveLeft.current = false; break;
            case 'KeyD': moveRight.current = false; break;
            default: break;
        }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
    }
}, []);

    useFrame((_, delta) => {
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        direction.z = Number(moveForward.current) - Number(moveBackward.current);
        direction.x = Number(moveRight.current) - Number(moveLeft.current);
        direction.normalize();

        if (moveForward.current || moveBackward.current) velocity.z -= direction.z * SPEED * delta;
        if (moveLeft.current || moveRight.current) velocity.x -= direction.x * SPEED * delta;

        camera.translateX(-velocity.x * delta);
        camera.translateZ(-velocity.z * delta);
       
        camera.position.y = 3;
    });

    return (
        <PointerLockControls />
    );
}