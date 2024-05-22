import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    margin: 10px auto 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 1px 0px 21px 12px rgba(0, 0, 0, 0.1);
    padding: 40px 100px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        width: 1000px;
        background-color: #00eeff50;
        margin: 0;
    }
    img {
        width: auto;
    }
`;


export const PostTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        margin: 20px 0px 10px 0px;
        padding: 20px;
        text-align: start;
        align-self: start;
        font-size: 3rem;
    }
    img {
        max-width: 100%;
        min-width: 430px;
        border-radius: 10px;
    }
`;

