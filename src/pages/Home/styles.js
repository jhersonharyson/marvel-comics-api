import styled, {keyframes} from 'styled-components'

const fadeInSlide = keyframes`
  from{
    opacity: 0;
    margin-top: 300px;
  }
  to{
    opacity: 1;
    margin-top: 0px;
  }
`

export const Container = styled.div`
    display: flex; 
    /* padding: 0px 50px; */
    flex: 1;
    height: 100%;
    /* background-color: yellow; */
    animation: ${fadeInSlide} 1.2s forwards;
    .sidebar-left{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        position: relative;
        padding: 40px 0 0 0;
        /* max-width: 300px; */
        overflow:visible;
        /* z-index: 5 */
    }

    .middle-content{
        display: flex;
        flex: 2;
        /* background-color: blue; */
    }

    .sidebar-right{
        display: flex;
        flex: 1;
        /* background-color: red; */
    }
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