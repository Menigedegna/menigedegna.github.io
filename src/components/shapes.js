import { styled } from "styled-components";

export const LineBar = styled.div`
    width: 3px; 
    height: 100%;
    background-color: var(--color-dark-purple); 
`;

export const Square = styled.div`
    width: 25rem; 
    height: 14rem; 
    background-color: #FF0202;
`;

export const HorLineBar = styled.div`
    width: 100%; 
    height: 2px;
    background-color: var(--color-dark-purple); 
`;

export const Circle = styled.div`
    width: 7rem;
    aspect-ratio: 1/1;
    border-radius: 120px;
    background-color: black;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;