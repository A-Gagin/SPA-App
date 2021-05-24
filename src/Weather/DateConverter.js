// Creates a readable date from unix timestamp.
// Array Indexes:
    // 0: Day of the week
    // 1: Month
    // 2: Numeric date
    // 3: Hour (with AM/PM)
    // 4: Hour (Military)
// Source: https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript

function DateConverter(unixDate) {
    const milliseconds = unixDate * 1000
    const date = new Date(milliseconds)
    const array = []
    array.push(date.toLocaleString("en-US", { weekday: "long" }));
    array.push(date.toLocaleString("en-US", { month: "long" }));
    array.push(date.toLocaleString("en-US", { day: "numeric" }));
    array.push(date.toLocaleString("en-US", { hour: "numeric" }));
    array.push(date.toLocaleString("en-GB", { hour: "numeric" }));
    return (
        array
    )
}
export default DateConverter;