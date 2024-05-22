export const formartDate = (date: string) => {
    const dateFormated = new Date(date);
    return new Intl.DateTimeFormat('pt-BR').format(dateFormated);
};

export const formatarData = (data: string): string => {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
    });
};
