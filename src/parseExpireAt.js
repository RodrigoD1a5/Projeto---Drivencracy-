import { getExpireAt } from "./getExpireAt.js";

export function parseExpireAt(expireAt) {
    const formatDate = (data) => {
        const dateFormatted = data.replace(/-/g, "").replace(" ", "").replace(/:/g, "");
        return dateFormatted;
    };

    return formatDate(getExpireAt(0)) > formatDate(expireAt);

}