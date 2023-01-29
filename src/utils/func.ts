export const RupiahFormat = (amount : number) => {

    const format = new Intl.NumberFormat("id-ID").format(amount)

    return `Rp ${format}`
}