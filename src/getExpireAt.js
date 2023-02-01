import dayjs from "dayjs";

export function getExpireAt() {
    const dia = Number(dayjs().date()).toLocaleString("pt-br", { minimumIntegerDigits: 2 });
    const mes = Number(dayjs().month() + 2).toLocaleString("pt-br", { minimumIntegerDigits: 2 });
    const ano = dayjs().year();
    return `${dia}/${mes}/${ano}`;
}
