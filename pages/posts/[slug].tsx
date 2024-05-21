import Post from '@/app/containers/Post';
import { countAllPosts } from '@/app/data/posts/count-all-posts';
import { getAllPosts } from '@/app/data/posts/get-all-posts';
import { getPost } from '@/app/data/posts/get-post';
import { PostData } from '@/app/domain/posts/tipagem';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
    post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
    console.log(post);
    return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
    const numberOfPosts = await countAllPosts();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data }: any = await getAllPosts(`populate[0]=image&pagination[start]=0&pagination[limit]=${numberOfPosts}`);

    return {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        paths: data.map((post: any) => ({ params: { slug: post.attributes.slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params as { slug: string };

    const post = await getPost(slug);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: { post },
    };
};
