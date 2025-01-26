import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import styled from "styled-components";

const Desc = styled.div`
  width: 250px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        Foco no design e desenvolvimento de produtos digitais inteiros,
        considerando o ciclo de vida do produto, a experiência completa do
        usuário e a resolução de problemas.
      </Desc>
    </>
  );
};

export default ProductDesign;
