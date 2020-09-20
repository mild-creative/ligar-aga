import { detect } from 'detect-browser';


export const browser = () => {
    const b = detect();
    const name = b.name
    const os = b.os
    const version = Number(b.version.split('.')[0])
    if (name === 'chrome' && version > 66) {
        return true
    } else if (name == 'crios' || name == 'safari' || name == 'ios') {
        return true
    } else {
        return false
    }
}