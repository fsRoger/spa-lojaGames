import styled from 'styled-components';

export const LojasStyled = styled.div`
  text-align: center;
  color: #fff;
  text-rendering: ;
`;

export const ContainerMap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:2rem;
  gap:1rem;
  padding-bottom: 10rem;
`;

export const DetailsContainer = styled.div`
  height: 100%;
  padding: 3rem;
  display: grid;
  align-items: center;
  p{  
      color: #fff;
      margin-left

    }

  div.imagem{  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    div{
      display: flex;
      align-items: center;
      justify-content: center
      background-color: #101F2D;
    }

    h2{
      color: #fff;
      text-align :left;
      margin-bottom: 2rem;
      color: red;
     
    }
    img{
      width: auto;
      height: auto;
    }
    p.preco{
      color: red;

     font-size: large;
     padding-top: 2rem;
     margin-left: 1rem;
     
    }
    p.plataformas{
      color: #fff;
      font-size: large;
      padding-top: 2rem;
      margin-left: 1rem;
    }
      
    }
    button.compre{
      align-items: center;
      margin-top: 2rem;
      width: 100px;
      height: 3rem;
      background-color: #0bade3;
      border: none;
      outline:none;
      font-size:1rem;
      color: #fff;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
      border-radius: 0.3rem;
      font-family: Roboto, arial;
      font-weight: 600;
      letter-spacing: 0.1rem;
      text-transform: uppercase;

      &:hover{
        background-color: #00E205;
        transform: scale(1.1); 
        transition:all;
      }
    }
  

  div.descricao{ 
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    padding: 2rem;
    
    p.descricao {
      color: #fff; 
      font-size: 1rem; 
      font-weight: 400; 

  
      &:hover {
        color: #567889;
        transition: all 0.3s;
      }
    }
  }
 
  
  @media (min-width: 640px) {
    grid-template-columns: repeat( 1fr); 
    img{
    width: 200px;
    height: 200px;
    }
    
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat( 1fr);
    gap: 1.5rem; /* corresponde a md:gap-6 */
    padding: 4rem;

    img{
    width: auto;
    height: auto;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem;
    
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr); 
  }

`;




