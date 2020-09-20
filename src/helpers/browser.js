import { detect } from 'detect-browser';


export const browser = () => {
    const b = detect();
    const name = b.name
    const os = b.os
    const version = Number(b.version.split('.')[0])
    if (name == 'chromium-webview' || name == 'ios-webview') {
        return false
    }
    else if (name == 'chrome' && os == 'Android OS' && version < 66) {
        return false
    } else {
        return true
    }
}