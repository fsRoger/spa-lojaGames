import React from 'react'
import { StyledCard, ImageCard, ContentCard } from "./styles"
//import jogos from "../../../dados"



export function Card({ props }) {
  return (
    <>
      <StyledCard>
        <a >
          <div >
            <img
              width={380}
              height={200}
              src={props.linkImagem}
              alt="Thumbnail do projeto"
            />
          </div>
          <div className="content">
            <span className="title">{props.nome}</span>
            <span className="name">{props.descricao}</span>
            <span className="description">{props.preco}</span>
            <span className="title">{props.plataformas}</span>
            <span className="title">{props.lojas}</span>
          </div>
        </a>
      </StyledCard>
    </>


  );
};




