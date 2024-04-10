export const wordFormat = (num: Number) =>  {
    const numberString = num.toString()
    const lastDigit = numberString.charAt(numberString.length - 1);
    let res: string;

    if (lastDigit === "1") {
        res = "cлово"
    } else if (lastDigit === "2" || lastDigit === "3" || lastDigit === "4") {
        res = "слова"
    } else {
        res = "слов"
    }

    return res;
}
