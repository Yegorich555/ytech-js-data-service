export default function clone<T>(obj: T): any {
    return JSON.parse(JSON.stringify(obj)); //parse date
}