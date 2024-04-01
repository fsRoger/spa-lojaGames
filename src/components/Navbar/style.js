import styled from "styled-components";

export const NavStyled = styled.nav`

  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 1rem;
  background-color: #101F2D;
  z-index: 1;
  
  div.container{
    display: flex;
    gap: 2rem;
  }
`;

export const ImageLogo = styled.img`
  width: 8rem;
  height: 3.5rem;
  object-fit: cover;
  cursor: pointer;
  row-gap: 2rem;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;

    i{
    position: flex;
    
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.6rem;
    }

  input{
    position: flex;
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    border-radius: 0.3rem;
    left: 10rem;

    &:focus{
      border: 1px solid #0bade3;
    }
  }

`;

