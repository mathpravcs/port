import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Social = styled.a`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    background-color: #c13b90;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
`;
const SocialButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const openCv = () => {
  window.open("./public/desenvolvedor.pdf", "_blank");
};

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Pensar. Fazer. Resolver</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>O eu que faço ?</Subtitle>
          </WhatWeDo>
          <Desc>Sou Software Engineer e entusiasta de tecnologia.</Desc>

          <SocialButtons>
            <Social
              href="https://www.linkedin.com/in/matheus-basilio10/"
              target="_blank"
            >
              <i className="ri-linkedin-box-fill"></i>
            </Social>
            <Social
              href="https://www.instagram.com/m_basilio10?igsh=dmlja2s3OThvNm1p"
              target="_blank"
            >
              <i className="ri-instagram-fill"></i>
            </Social>
            <Social href="https://github.com/mathpravcs" target="_blank">
              <i className="ri-github-fill"></i>
            </Social>

            <Social
              href="https://wa.me/5511963144610?text=Olá%2C+gostaria+de+saber+mais+sobre+os+seus+serviços!"
              target="_blank"
            >
              <i class="ri-whatsapp-line"></i>
            </Social>
          </SocialButtons>

          <Button as="button" onClick={openCv}>
            Download Cv
          </Button>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
