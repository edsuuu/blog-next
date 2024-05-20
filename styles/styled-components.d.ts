//tipagem paara o theme

import { theme } from "./theme";

type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

//exemplo de como ficaria

// const Teste = styled.div`
//     background-color: ${({ theme }) => theme.colors.primary};
// `;
