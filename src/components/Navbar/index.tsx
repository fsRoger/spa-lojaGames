import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import logo from "../../assets/logo.png";
import { NavStyled, ImageLogo, InputSpace } from './style';


export function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <NavStyled>
        <div className='container'>
          <InputSpace>
            <input
              type='text'
              placeholder='Pesquise um jogo'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputSpace>
          <Link to="/"><ImageLogo src={logo} alt="Logo"></ImageLogo></Link>
        </div>
      </NavStyled>
      <Outlet />
    </>
  );
}

