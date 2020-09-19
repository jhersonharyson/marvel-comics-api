import styled from 'styled-components'

export const Container = styled.div`
    display: flex; 
    padding: 0px 50px;
`;

export const SearchContainerField = styled.div`
    display: flex; 
    padding: 0px 50px;
    flex-direction: column;
    overflow: hidden;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: -40px;
`;

export const Flex = styled.div`
    display: flex;
`;

export const TitleBar = styled.div`
    display: flex;
    align-itens: center;
    margin-bottom: 30px;

    a {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 32px;
        margin-right: 10px;
    }
`;

export const ComicTitle = styled.h1`
    color: #fff;
`;

export const InformationBox = styled.div`
    flex: 1;
    margin: 0px 15px;

    p {
        margin: 0px 0px 40px;
        color: #fff;
    }
`;

export const Title = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
`;