import Ember from "ember";

export function printMonthYear([date]) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    if (date) {
        const d = new Date(date);
        const month = months[d.getMonth()];
        const year = d.getFullYear();

        return `${month} ${year}`;
    }

    return null;
}

export default Ember.Helper.helper(printMonthYear);
