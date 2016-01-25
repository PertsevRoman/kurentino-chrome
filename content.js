/**
 * Created by joker on 24.01.16.
 */

var port = chrome.runtime.connect();

port.onMessage.addListener(function (message) {
    window.postMessage(message, '*');
});

window.addEventListener('message', function (event) {
    if(event.data.id === 'getScreenId') {
        port.postMessage(event.data);
    }
});