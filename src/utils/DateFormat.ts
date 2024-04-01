const numWithZero = (num: Number) => {
    if (num.toString().length < 2) {
        return `0${num}`;
    }
    return num;
};

export const getFullFormatDate = (date: Date): string => {

    let fullDate = `${date.getFullYear()}-${numWithZero(
        date.getMonth() + 1
    )}-${numWithZero(date.getDate())}`;

    return fullDate;
};

export const DateTable = (date:Date): string => {

    let fullDate = `${numWithZero(date.getDate())}.${numWithZero(
        date.getMonth() + 1
    )}.${date.getFullYear()}`;

    return fullDate;

}
