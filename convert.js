export function camelToUnderscore(key) {
    if (key.replace(/[^a-z]/g, "").length > 0) {
        let result = key.replace(/([A-Z])/g, " $1")
        return result.split(' ').join(' ').substring()
    } else {
        return key
    }
}
