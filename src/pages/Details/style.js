import styled from 'styled-components';

export const DetailsContainer = styled.div`


  span.description {
    color: #fff; /* corresponde a text-gray-800 */
    font-size: 0.875rem; /* corresponde a text-sm */
    font-weight: 500; /* corresponde a font-medium */
    display: block;
    margin-top: 30px; /* corresponde a mt-[30px] */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s;

    &:hover {
      color: #fff; /* corresponde a group-hover:text-violet-500 */
    }




  }

`;

