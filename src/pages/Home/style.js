import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  min-height: 100vh;
  margin: 1rem 0rem 2rem 4rem ;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat( 1fr); 
    align-items: center;
  justify-content: center;
    
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat( 1fr);
    gap: 1.5rem; /* corresponde a md:gap-6 */
    padding: 4rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr); 
  }

 
`;




