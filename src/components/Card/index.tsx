import React from 'react';
import { StyledCard, ButtomContainer, PlatformsContainer } from "./styles";




export function Card({ linkImagem, nome, preco, plataformas }) {
  return (
    <>
      <StyledCard>

        <div >
          {linkImagem && (
            <img
              width={380}
              height={200}
              src={linkImagem}
              alt="Thumbnail do projeto"
            />)}
        </div>
        <div className="content">
          <h2 className="name">{nome}</h2>
          < ButtomContainer>


            <PlatformsContainer>
              {plataformas.map((plataforma, index) => (
                <h5 key={index} className="plataformas">
                  {plataforma}
                </h5>
              ))}
            </PlatformsContainer>
          </ButtomContainer>
        </div>
        <ButtomContainer>
          <h5 className="price">R$ {preco} BRL</h5>
          <button className='compre'>Compre</button>
          <button className='favorito'><i className="bi bi-heart"></i></button>
        </ButtomContainer>


      </StyledCard>
    </>


  );
};




