import React from 'react';
import logo from "../../assets/logo.jpeg";
import { ButtomStyled, NavStyled, ImageLogo, InputSpace } from './style';
import { Link, Outlet } from 'react-router-dom';

export function Navbar({ searchTerm, setSearchTerm }) {

  return (
    <>
      <NavStyled>
        <div>
          <InputSpace>
            <button type="submit">
              <i className='bi bi-search'></i>
            </button>
            <input
              type='text'
              placeholder='Pesquise um jogo'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputSpace>

          <Link to="/"><ImageLogo src={logo} alt="Logo"></ImageLogo></Link>

          <ButtomStyled>Entrar</ButtomStyled>
        </div>
      </NavStyled>
      <Outlet />
    </>
  );
}

