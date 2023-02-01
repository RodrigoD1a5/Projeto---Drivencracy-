//Função que retorna a data a frente d dias 

export function getExpireAt(d) {
    const zeroFill = (n) => {
        return n <= 9 ? `0${n}` : `${n}`;
    };

    const formatDate = (date) => {
        const d = zeroFill(date.getDate());
        const mo = zeroFill(date.getMonth() + 1);
        const y = zeroFill(date.getFullYear());
        const h = zeroFill(date.getHours());
        const mi = zeroFill(date.getMinutes());

        return `${y}-${mo}-${d} ${h}:${mi}`;
    };

    const date = new Date();
    date.setDate(date.getDate() + d);

    return (
        formatDate(date)
    );
}
