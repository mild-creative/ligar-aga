import { detect } from 'detect-browser';


export const browser = () => {
    const b = detect();
    const name = b.name
    const os = b.os
    const version = Number(b.version.split('.')[0])
    let result = true
    if (os == 'Android OS') {
        if (name == 'chrome' && version > 66) {
            return true
        } else if (name == 'samsung' && version > 9) {
            return true
        } else {
            result = false
        }
    } else if (name == 'ios-webview') {
        result = false
    }
    return result
}