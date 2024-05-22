import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        max-width: 700px;
        width: 100%;
        min-width: 430px;
        height: auto;
        border-radius: 10px;
    }
`;

export const Title = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    margin: 20px 0px 10px 0px;
    padding: 20px;
    text-align: start;
    align-self: start;
    font-size: 2.6rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    &::first-letter {
        text-transform: uppercase;
    }
`;
