import { API_URL } from '@/app/config/app-config';
import { PostData } from '@/app/domain/posts/types';
import { fetchJson } from '@/app/utils/fetch-json';

export async function getAllPosts(query = ''): Promise<PostData[]> {
    const url = `${API_URL}/posts?${query}`;
    const posts = await fetchJson<PostData[]>(url);
    return posts;
}

//Exibir apenas 1 post
//http://localhost:1337/api/posts/1?populate[0]=image&populate[1]=autor&populate[2]=categoria

//Filtro para categorias
//http://localhost:1337/api/posts?populate[0]=image&populate[1]=autor&populate[2]=categoria&filters[categoria][name][$contains]=Python
//http://localhost:1337/api/posts?populate[0]=image&populate[1]=autor&populate[2]=categoria&filters[categoria][name][$contains]=JavaScript
//http://localhost:1337/api/posts?populate[0]=image&populate[1]=autor&populate[2]=categoria&filters[categoria][name][$contains]=TypeScript

//Limite de exibiçao
//http://localhost:1337/api/posts?populate[0]=image&pagination[start]=0&pagination[limit]=1
