import styled from 'styled-components';

export const StyledModal = styled.div`
  height: 700px;
  width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #101F2D;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3%;
  border: 1px solid #ccc;
 z-index: 99999999;
 

button.fechar{
  position: absolute;
  top: 1rem ;
  right: 1rem;
  color: red;
  padding: 0.8rem;
  border-radius: 10px;
  font-weight: 500;
  

  &:hover{
    cursor: pointer;
    background-color: red;
    color: #ccc;
    transition: all 0.3s;
  }
}
button.salvar{
  position: absolute;
  bottom: 1rem ;
  right: 1rem;
  color: green;
  padding: 0.8rem;
  border-radius: 10px;
  font-weight: 500;
  

  &:hover{
    cursor: pointer;
    background-color: green;
    color: #fff;
    transition: all 0.3s;
  }
}
button.sair{
  position: absolute;
  bottom: 1rem ;
  left: 1rem;
  color: black;
  padding: 0.8rem;
  border-radius: 10px;
  font-weight: 500;
  

  &:hover{
    cursor: pointer;
    background-color: black;
    color: #fff;
    transition: all 0.3s;
  }
}

div.modalForm{
 
  padding: 2rem;
  text-align: center;
}

input.inputStyle{
  color:red;
  padding: 0.5rem;
  border-radius: 10px;

}
label.labelStyle{
  color:#fff;
  padding: 10px;
  margin-right:;
}
`;


