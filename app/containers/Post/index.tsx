/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { PostData } from '@/app/domain/posts/types';
import { Container, Content, PostTitle } from './styled';
import PostDetails from '@/app/components/PostDetails';

export type PostProps = {
    post: PostData;
};

const Post = ({ post }: PostProps) => {
    console.log(post);

    return (
        <Container>

            <PostTitle>
                <h1>{post.attributes.title}</h1>
                <img src={post.attributes.image.data.attributes.formats.large.url} alt="" />
                <PostDetails data={post.attributes.createdAt} autor={post.attributes.autor.data.attributes.name} categoria={post.attributes.categoria.data.attributes.name} />
            </PostTitle>

            <Content>
                {post.attributes.content.map((item, index) => {
                    switch (item.type) {
                        case 'heading':
                            switch (item.level) {
                                case 1:
                                    return <h1 key={index}>{item.children[0].text}</h1>;
                                case 2:
                                    return <h2 key={index}>{item.children[0].text}</h2>;
                                case 3:
                                    return <h3 key={index}>{item.children[0].text}</h3>;
                                case 4:
                                    return <h4 key={index}>{item.children[0].text}</h4>;
                                case 5:
                                    return <h5 key={index}>{item.children[0].text}</h5>;
                                case 6:
                                    return <h6 key={index}>{item.children[0].text}</h6>;
                                default:
                                    return null;
                            }

                        case 'paragraph':
                            return (
                                <p key={index}>
                                    {item.children.map((child: any, childIndex: any) => {
                                        switch (child.type) {
                                            case 'text':
                                                if (child.bold) return <strong key={childIndex}>{child.text}</strong>;
                                                if (child.italic) return <em key={childIndex}>{child.text}</em>;
                                                if (child.underline) return <u key={childIndex}>{child.text}</u>;
                                                if (child.strikethrough) return <s key={childIndex}>{child.text}</s>;
                                                return child.text;
                                            case 'link':
                                                return (
                                                    <a key={childIndex} href={child.url}>
                                                        {child.children[0].text}
                                                    </a>
                                                );
                                            default:
                                                return null;
                                        }
                                    })}
                                </p>
                            );

                        case 'list':
                            if (item.format === 'ordered') {
                                return (
                                    <ol key={index}>
                                        {item.children.map((listItem: any, listItemIndex: any) => (
                                            <li key={listItemIndex}>{listItem.children[0].text}</li>
                                        ))}
                                    </ol>
                                );
                            } else {
                                return (
                                    <ul key={index}>
                                        {item.children.map((listItem: any, listItemIndex: any) => (
                                            <li key={listItemIndex}>{listItem.children[0].text}</li>
                                        ))}
                                    </ul>
                                );
                            }

                        case 'quote':
                            return <blockquote key={index}>{item.children[0].text}</blockquote>;

                        case 'code':
                            return (
                                <pre key={index}>
                                    <code>{item.children[0].text}</code>
                                </pre>
                            );

                        case 'image':
                            return <img key={index} src={item.image.url} alt={item.image.alternativeText || 'Image'} />;

                        default:
                            return null;
                    }
                })}
            </Content>
        </Container>
    );
};

export default Post;
