import { Container, Title } from './styled';
import Image from 'next/image.js';

type PostTitleProps = {
    titulo: string;
    imageUrl: string;
    alt: string;
    width: number;
    height: number;
};

export default function PostTitle({ titulo, imageUrl, alt, width, height }: PostTitleProps) {
    return (
        <Container>
            <Title>{titulo}</Title>
            <Image src={imageUrl} alt={alt} width={width} height={height}/>
        </Container>
    );
}
