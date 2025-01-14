export default function findDepartureAtTime(arr, time) {
    return arr.find(obj => obj.dateTimeDepart.includes(time));
}