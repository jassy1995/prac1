

export const dataFormatter = () => {
    return new Intl.DateTimeFormat("en-us", {
        dateStyle: "full"
    })
}