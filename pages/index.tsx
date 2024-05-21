import HomePage from '@/app/containers/HomePage';
import { getAllPosts } from '@/app/data/posts/get-all-posts';
import { PostData } from '@/app/domain/posts/types';
import { GetStaticProps } from 'next';

export type HomeProps = {
    posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
    return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data }: any = await getAllPosts('populate[0]=image&sort=createdAt:desc');

    // console.log(data);populate[0]=image&pagination[start]=0&pagination[limit]=1
    // console.log(data[0].attributes.slug);
    // console.log(data);

    return {
        props: {
            posts: data,
            revalidate: 1,
        },
    };
};
