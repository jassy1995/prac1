

export const dataFormatter = () => {
    return new Intl.DateTimeFormat("en-us", {
        dateStyle: "full"
    })
}

export const getDateOfBirth = (birthDate, currentDate) => {
    const date1 = new Date(birthDate);
    const date2 = new Date(currentDate);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) / 365.25

}

export default function (year) {
    return `${Math.trunc(year)} years`;
}

export const timeout = (time) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}