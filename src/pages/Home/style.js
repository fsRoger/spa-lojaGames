import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  gap: 1rem; /* corresponde a gap-4 */
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr); /* corresponde a sm:grid-cols-2 */
  }

  @media (min-width: 768px) {
    gap: 1.5rem; /* corresponde a md:gap-6 */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* corresponde a lg:grid-cols-3 */
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr); /* corresponde a xl:grid-cols-4 */
  }
`;




