import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat( 1fr); 
    
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

  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr); 
  }
`;




