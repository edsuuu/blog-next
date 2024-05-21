import { PostData } from "@/app/domain/posts/types";
import { Container, Content } from "./styled";

export type PostProps = {
    post: PostData;
};

const Post =  ({ post }: PostProps) => {
    console.log(post);

    return (
        <Container>
            <h1>{post.attributes.title}</h1>
            <p>Autor: {post.attributes.autor.data.attributes.name}</p>
            <p>Categoria: {post.attributes.categoria.data.attributes.name}</p>
            <Content>
                {post.attributes.content.map((item, index) => {
                    switch (item.type) {
                        case 'heading':
                            return <h2 key={index}>{item.children[0].text}</h2>;
                        case 'paragraph':
                            return <p key={index}>{item.children[0].text}</p>;
                        case 'quote':
                            return <blockquote key={index}>{item.children[0].text}</blockquote>; //ou usar <q></q>
                        case 'code':
                            return <pre key={index}><code>{item.children[0].text}</code></pre>;
                        // case 'image':
                            // return <img key={index} src={item.children.image.formats.large.url} alt="Imagem do post" />;
                            // return <img key={index} src={item.children.image} alt="Imagem do post" />;
                        default:
                            return null;
                    }
                })}
            </Content>
        </Container>
    );
};

export default Post;
