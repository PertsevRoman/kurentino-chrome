/**
 * Created by joker on 24.01.16.
 */

var port = chrome.runtime.connect();

port.onMessage.addListener(function (message) {
    window.postMessage(message, '*');
});

document.addEventListener('DOMContentLoaded', function () {
    window.postMessage({
        id: 'extensionLoaded',
        status: true
    }, '*');
});

window.addEventListener('message', function (event) {
    switch (event.data.id) {
        case 'getScreenId': {
            port.postMessage(event.data);
        } break;
        case 'getExtensionStatus': {
            window.postMessage({
                id: 'extensionLoaded',
                status: true
            }, '*');
        } break;
    }
});