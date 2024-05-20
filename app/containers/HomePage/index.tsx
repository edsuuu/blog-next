import { PostData } from '@/app/domain/posts/tipagem';
import { Container } from './styled';
import { MainContainer } from '@/app/components/MainContainer';

export type HomeProps = {
    posts: PostData[];
};

export default function HomePage({ posts }: HomeProps) {
    return (
        <>
            <MainContainer>
                <Container>
                    {posts.length > 0 &&
                        posts.map((post) => (
                            <div key={post.id}>
                                <h2>{post.attributes.title}</h2>
                            </div>
                        ))}
                </Container>
            </MainContainer>
        </>
    );
}
