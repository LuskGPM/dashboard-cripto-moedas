export const stringToLocaleUpperCase = (string: string): string => {
    return string.toLocaleUpperCase()
}

export const stringToCapitalize = (string: string): string => {
    const first = string.charAt(0).toUpperCase();
    const rest = string.slice(1).toLowerCase();
    return first + rest
}