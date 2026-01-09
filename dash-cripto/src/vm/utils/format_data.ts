export const stringToLocaleUpperCase = (string: string): string => {
    return string.toLocaleUpperCase()
}

export const stringToCapitalize = (string: string): string => {
    const first = string.charAt(0).toUpperCase();
    const rest = string.slice(1).toLowerCase();
    return first + rest
}

export const formatPrice = (number: number): string => {
    let number_pt_br = number.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    return 'R$ ' + number_pt_br
}