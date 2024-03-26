import React from 'react';
import logo from "../../assets/logo.jpeg";
import { ButtomStyled, NavStyled, ImageLogo, InputSpace } from './style';

const Navbar = () => {
  return (
    <>
      <NavStyled>
        <InputSpace>
          <i className='bi bi-search'></i>
          <input type='text' placeholder='Pesquise um jogo'></input>
        </InputSpace>

        <ImageLogo src={logo} alt="Logo"></ImageLogo>

        <ButtomStyled>Entrar</ButtomStyled>
      </NavStyled>
    </>
  );
}

export default Navbar