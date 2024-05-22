import { API_URL } from '@/app/config/app-config';
import { PostData } from '@/app/domain/posts/types';

export const getPost = async (slug: string): Promise<PostData | null> => {
    const response = await fetch(`${API_URL}/posts?filters[slug][$eq]=${slug}&populate[0]=image&populate[1]=autor&populate[2]=categorias`);
    const data = await response.json();

    if (data.data.length === 0) {
        return null;
    }

    return data.data[0];
};
