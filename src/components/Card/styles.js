import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 1rem; 
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: #101F2D; 
  overflow: hidden; 
  border: 2px solid; 
  border-color: #ccc; 
  opacity: 0.8;
  transition: all 0.3s; 
  cursor: pointer;
  padding-bottom:20px;
  margin-top: 2rem;
  
  &:hover {
    border-color: #00E205; 
    transition: all 0.3s; 
    opacity: 1;
  }

    img {
      width: 400px;
      height: 300px;
      object-fit: cover;
      transition: all 0.5s;
      
      &:hover {
        transform: scale(1.1); 
      }
    }

  div.content {
   
    display: flex;
    flex-direction: column;
    padding: 4rem; 

    h2.name {
     font-size: larger;
      color: #fff; 
      margin-top: -40px;
      padding-bottom: 20px;
    }
  }
`;

export const PlatformsContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center; 
  font-size: larger;

  h5.plataformas{
   
  }
  &:hover{
      color: #00E205;
      transition: all 0.5s;
    }
`;

export const ButtomContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-direction: row;

  h5.price {
      font-size: x-large;
      position: relative;
      flex: auto;
      color: red;
      bottom: 1.5rem;
      right: 6rem;

      &:hover {
        transform: scale(1.3); 
        transition-delay: 0.3s;
        transition:all;
      }
  }
  
  button.compre{
    gap: 1rem;
    bottom: 4rem;
    position: relative;
    left: 5rem;
    width: 26%;
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

    button.favorito{
      gap: 1rem;
      left: 6rem;
      bottom: 4rem;
      position: relative;
      width: 10%;
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
`;

