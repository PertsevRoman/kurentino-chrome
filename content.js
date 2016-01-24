/**
 * Created by joker on 24.01.16.
 */

var port = chrome.runtime.connect();

port.onMessage.addListener(function (message) {
    console.log('Отправка данных (content.js)');
    window.postMessage(message, '*');
});

window.addEventListener('message', function (event) {
    console.log('Пришли данные (content.js)');
    console.log(event.data);
    if(event.data.id === 'getScreenId') {
        port.postMessage(event.data);
    }
});