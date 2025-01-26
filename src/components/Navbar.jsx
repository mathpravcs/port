import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Who from "./Who";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 80px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

const email = "matheus_n11@live.com";
const subject = "Contato via site";
const body = "Olá, gostaria de entrar em contato sobre...";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleContactClick = () => {
    setIsLoading(true); // Inicia o loading

    // Simula um pequeno delay antes de abrir o cliente de e-mail
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setIsLoading(false); // Reseta o estado caso o e-mail não abra
    }, 500); // Adicione um pequeno delay
  };

  return (
    <>
      <Section>
        <Container>
          <Links>
            <Logo src="./img/math.png" />
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Sobre mim</ListItem>
              <ListItem>Serviços</ListItem>
            </List>
          </Links>
          <Icons>
            <Button onClick={handleContactClick} disabled={isLoading}>
              {isLoading ? (
                <>
                  <span>Processando...</span>
                  <span className="loader"></span>
                </>
              ) : (
                "Contato"
              )}
            </Button>
          </Icons>
        </Container>
      </Section>
    </>
  );
};

export default Navbar;
