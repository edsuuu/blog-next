import { PostData } from '@/app/domain/posts/tipagem';
import { Container } from './styled';
import { MainContainer } from '@/app/components/MainContainer';
import PostCard from '@/app/components/PostCard';

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
                            <PostCard key={post.id}
                            title={post.attributes.title}
                            slug={post.attributes.slug}
                            url={post.attributes.image.data.attributes.formats.small.url}
                            width={post.attributes.image.data.attributes.formats.small.width}
                            height={post.attributes.image.data.attributes.formats.small.height}
                            >
                            </PostCard>
                        ))}

{/* {console.log(posts[0].attributes.image.data.attributes.formats.large.width)} */}


                </Container>
            </MainContainer>
        </>
    );
}
