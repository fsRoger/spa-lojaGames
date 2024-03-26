import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 0.375rem; /* corresponde a rounded-lg */
  height: 436px; /* corresponde a h-[436px] */
  display: flex;
  flex-direction: column;
  background-color: white; /* corresponde a bg-white */
  overflow: hidden; /* corresponde a overflow-hidden */
  border-width: 2px; /* corresponde a border-2 */
  border-color: #2c2c2c; /* corresponde a border-gray-800 */
  opacity: 0.8; /* corresponde a opacity-80 */
  transition: all 0.3s; /* corresponde a transition-all */
  cursor: pointer;

  &:hover {
    border-color: #8a2be2; /* corresponde a hover:border-violet-500 */
    opacity: 1; /* corresponde a hover:opacity-100 */
  }

  
    
    img {
      width: 380px;
      height: 200px;
      object-fit: cover;
      transition: all 0.5s;
      
      &:hover {
        transform: scale(1.1); /* corresponde a group-hover:scale-110 */
      }
    }
  

  div.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem; /* corresponde a p-8 */
    
    span.title {
      font-weight: 500; /* corresponde a font-medium */
      color: #2c2c2c; /* corresponde a text-gray-800 */
      transition: all 0.3s;
      
      &:hover {
        color: #8a2be2; /* corresponde a group-hover:text-violet-500 */
      }
    }
    
    span.name {
      margin-top: 0.5rem; /* corresponde a mt-2 */
      color: #2c2c2c; /* corresponde a text-gray-800 */
      line-clamp: 4;
    }

    span.description {
      color: #2c2c2c; /* corresponde a text-gray-800 */
      font-size: 0.875rem; /* corresponde a text-sm */
      font-weight: 500; /* corresponde a font-medium */
      display: block;
      margin-top: 30px; /* corresponde a mt-[30px] */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.3s;

      &:hover {
        color: #8a2be2; /* corresponde a group-hover:text-violet-500 */
      }
    }
  }
`;


export const ImageCard = styled.div`

`

export const ContentCard = styled.div``
