import { formatarData } from '@/app/utils/formatar-data';
// import { formartDate } from '@/app/utils/formatar-data';
import { Container } from './styled';

type PostDetailsProps = {
    data: string;
    autor: string;
    categoria: string;
};

export default function PostDetails({ data, autor, categoria }: PostDetailsProps): JSX.Element {
    return (
        <Container>
            Post feito na data <span>{formatarData(data)}</span> por <span>{autor}</span>, na Categoria {categoria}
        </Container>
    );
}
