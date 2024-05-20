import { API_POSTS } from "@/app/config/app-config";
import { PostData } from "@/app/domain/posts/tipagem";
import { fetchJson } from "@/app/utils/fetch-json";

export const getAllPosts = async (): Promise<PostData[]> => {
    const posts = await fetchJson<PostData[]>(API_POSTS);
    return posts;
};
