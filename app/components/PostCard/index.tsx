import Link from 'next/link';
import { Container, PostCardCover, PostCardTitle } from './styled';
import Image from 'next/image';

export type PostCardProps = {
    slug: string;
    title: string;
    url: string;
    width: number;
    height: number;
};

export default function PostCard({ slug, title, url, width, height }: PostCardProps) {
    return (
        <Container>

            <PostCardCover>
                <Link  href="/posts/[slug]" as={`/posts/${slug}`}>
                <Image src={url} alt={title} width={width} height={height}/>
                </Link>

            </PostCardCover>

            <PostCardTitle>
                <Link legacyBehavior href="/posts/[slug]" as={`/posts/${slug}`}>
                    <a>{title}</a>
                </Link>
            </PostCardTitle>

        </Container>
    );
}
