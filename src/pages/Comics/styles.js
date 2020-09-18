import styled from 'styled-components'

export const Container = styled.div`
    display: flex; 
    padding: 0px 50px;
`;

export const Box = styled.div`
    flex: 1;
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

export const Title = styled.h1`
    color: #fff;
`;

export const InformationBox = styled.div`
    flex: 1;
    margin: 0px 15px;

    h2 {
        color: #fff;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
    }

    p {
        margin: 10px 0px 40px;
        color: #fff;
    }
`;