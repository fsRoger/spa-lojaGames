import styled from "styled-components";

export const NavStyled = styled.nav`

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 1rem;
  background-color: #101F2D;
  z-index: 1;
  

  form{
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
 
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
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.6rem;
    }

  input{
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

export const ButtomStyled = styled.button`
  background-color: #0bade3;
  border: none;
  outline:none;
  font-size:1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &:hover{
    background-color: #00E205;
  }
`;