import styled from 'styled-components';

export const ComicRow = styled.div`
    display: flex;
    align-items: center;
`;

export const ComicCover = styled.img`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 3px;
    transition: transform .2s;
    margin: 0 10px;

    &:hover {
        transform: scale(1.15);
    }
`;