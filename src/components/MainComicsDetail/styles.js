import styled from 'styled-components'

export const Container = styled.div`
    display: flex; 
    padding: 0px 50px;
    margin-bottom: 10px;
`;

export const SearchContainerField = styled.div`
    display: flex; 
    padding: 0px 50px;
    flex-direction: column;
    overflow: hidden;
`;

export const Box = styled.div`
    flex: 1;
`;

export const Flex = styled.div`
    display: flex;
`;

export const ComicCover = styled.img`
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 3px;
    transition: transform .2s;
    margin: 0 10px;
    position: -webkit-sticky;
    position: sticky;
    top: 16px;
    z-index: 2;

    &:hover {
        transform: scale(1.15);
    }
`;

export const TitleBar = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    a {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 32px;
        margin-right: 10px;
        margin-left: -5px;
    }
`;

export const ComicTitle = styled.h1`
    color: #fff;
`;

export const ResumeIsNotAvaliable = styled.h1`
    color: #513d3d;
    font-size: 12px;
    font-weight: 900;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 5px;
    background-color: #fff;
    width: 90px;
    margin-bottom: 35px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const InformationBox = styled.div`
    flex: 1;
    margin-left: 24px;
    p, ul {
        margin-bottom: 40px;
        color: #fff;
    }
    span {
        font-size: 12px;
    }

    li {
        margin-left: 16px;
    }
`;

export const Title = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
`;