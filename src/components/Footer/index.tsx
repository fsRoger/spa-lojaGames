import React from 'react'
import { SectionFooter } from './style'

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import GoogleMap from "../Googlemaps/GoogleMap"

const Footer = () => {
  return (
    <div className=" ">
      <div className="">
        <div className=''>
          <h1>Endereço do Escritório</h1>
          <p>Rua das Palmeiras 321 sala 2 .Centro JD. Silveira | CEP: 0222.22</p>
        </div>
        <div className=''>
        </div>
      </div>
      <div className=' '>
        <div className=''>
          <div className=''>
            <ul >
              <li>E-mail Profissional</li>
              <li>Hospedagem WordPress</li>
              <li>Migre para StartSite</li>
              <li>Sistema de Atendimento WhatsApp</li>
            </ul>
          </div>
          <div>
            <ul>
              <li> Sobre StartSite</li>
              <li> Quem Somos</li>
              <li>Portfólio</li>
              <li> Blog</li>
              <li> Depoimentos</li>
              <li> Indique e Ganhe</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=''>
        <div className="">
          <img src='/images/website/logo.png' width={60} height={100} className='' alt="Logo" />

          <ul className=''>
            <li>ALPHAVILLE - SP</li>
            <li>Al. Rio Negro, 161, 11°andar cjs. 1101 e 1102</li>
          </ul>
        </div>
        <div className="">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
      <div >
        <div>
          <div ></div>
        </div>
        <div >
          <div >
            ❤️ ©️ Copyright 2023 Pires e Gonçalves Advogados |
            Todos os Direitos Reservados.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
