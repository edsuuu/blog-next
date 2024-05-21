import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding: 10px 10px 10px 10px;
    transition: opacity 300ms ease-in-out;

    &:hover {
        opacity: 0.7;
        background-color: #0000002f;
    }
`;

export const PostCardCover = styled.div`

    img {
        width: 300px;
        height: 300px;
        display: block
    }
`;

export const PostCardTitle = styled.h2`
    margin: 0;
    margin-top: 10px;
    width: 300px;
    text-align: center;
    a {
        text-decoration: none;
        color: #000;
    }
`;
