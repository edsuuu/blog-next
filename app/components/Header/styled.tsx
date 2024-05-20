import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 30px;
    gap: 30px;
    a{
        color: white;
        text-decoration: none;
        font-size: 20px;
        transition: .3s ease-in-out;
        padding: 10px;
        border-radius: 20px;
        &:hover {
            background-color: blue;
        }
    }
`;
