import { formatarData } from '@/app/utils/formatar-data';
// import { formartDate } from '@/app/utils/formatar-data';
import { Container } from './styled';


type Categoria = {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
};

type PostDetailsProps = {
    data: string;
    autor: string;
    categorias: {
        data: Categoria[];
    };
};

export default function PostDetails({ data, autor, categorias }: PostDetailsProps): JSX.Element {
    return (
        <Container>
            Post feito na data <span>{formatarData(data)}</span> por <span>{autor}</span>, na Categoria {categorias.data.map((categoria, index) => (
                <span key={categoria.id}>{categoria.attributes.name}{index < categorias.data.length - 1 ? ' e ' : ''}</span>
            ))}
        </Container>
    );
}
