

export async function countAllPosts(): Promise<string[]> {
    const url = `http://localhost:1337/api/posts`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const jsonData = await response.json();

    // Verifique a estrutura do jsonData
    if (jsonData && jsonData.meta && jsonData.meta.pagination) {
        const totalPosts = jsonData.meta.pagination.total;
        return totalPosts;
    } else {
        throw new Error('Pagination data is not available in the response');
    }
}

// const response = await fetch(url)
//     const jsonData = await response.json();
//     return jsonData;
//Exibir apenas 1 post


//http://localhost:1337/api/posts/1?populate[0]=image&populate[1]=autor&populate[2]=categoria

//Filtro para categorias
//http://localhost:1337/api/posts?populate[0]=image&populate[1]=autor&populate[2]=categoria&filters[categoria][name][$contains]=Python
//http://localhost:1337/api/posts?populate[0]=image&populate[1]=autor&populate[2]=categoria&filters[categoria][name][$contains]=JavaScript
//http://localhost:1337/api/posts?populate[0]=image&populate[1]=autor&populate[2]=categoria&filters[categoria][name][$contains]=TypeScript

//Limite de exibiçao
//http://localhost:1337/api/posts?populate[0]=image&pagination[start]=0&pagination[limit]=1
