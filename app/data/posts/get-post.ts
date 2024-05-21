import { API_URL } from '@/app/config/app-config';
import { PostData } from '@/app/domain/posts/tipagem';

export const getPost = async (slug: string): Promise<PostData | null> => {
    const response = await fetch(`${API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`);
    const data = await response.json();

    if (data.data.length === 0) {
        return null;
    }

    return data.data[0];
};
