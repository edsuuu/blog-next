import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1000px;
    margin: 10px auto 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 1px 0px 21px 12px rgba(0, 0, 0, 0.1);
    padding: 40px 40px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 0;
        font-size: 2.7rem;
    }
    h2 {
        margin: 0;
        font-size: 2.4rem;
    }
    h3 {
        margin: 0;
        font-size: 2.1rem;
    }
    h4 {
        margin: 0;
        font-size: 1.8rem;
    }
    h5 {
        margin: 0;
        font-size: 1.5rem;
    }
    h6 {
        margin: 0;
        font-size: 1.2rem;
    }
    img {
        margin: 30px 0px 30px 0px;
        max-width: 600px;
        width: 100%;
        min-width: 400px;
        height: auto;
        border-radius: 20px;
    }
    p {
        font-size: 1.2rem;
        margin: 1px 0px 1px 0px;
        max-width: 800px;
        min-width: 400px;
        width: 100%;
        text-align: justify;
        background-color: #00eeff50;
    }
    ul {
        font-size: 1.2rem;
        margin: 10px 0px 10px 0px;
        max-width: 730px;
        min-width: 400px;
        width: 100%;
    }
    ol {
        font-size: 1.2rem;
        margin: 10px 0px 10px 0px;
        max-width: 730px;
        min-width: 400px;
        width: 100%;
    }
    q {
        font-size: 1.2rem;
        margin: 10px 0px 10px 0px;
        max-width: 730px;
        min-width: 400px;
        width: 100%;
    }
    pre {
        background-color: #80808089;
        padding: 10px;
        border-radius: 10px;
        margin: 10px 0px 10px 0px;
        max-width: 730px;
        min-width: 400px;
        width: 100%;
        code {
            font-size: 1rem;
        }
    }
`;

export const PostHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
