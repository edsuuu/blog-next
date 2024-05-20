import { PostData } from '@/app/domain/posts/tipagem';
import { GetStaticProps } from 'next';

const getPosts = async (): Promise<PostData[]> => {
    const response = await fetch('http://localhost:1337/api/posts?populate=*');
    const { data } = await response.json();

    return data;
};

export type HomeProps = {
    posts: PostData[];
};

export default function Home({ posts }: HomeProps) {

    return (
        <div>
            <h1>Home Page</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.attributes.title}</h2>
                </div>
            ))}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const post = await getPosts();

    return {
        props: {
            posts: post,
            revalidate: 5,
        },
    };
};
