/**
 * Created by joker on 24.01.16.
 */

chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
        console.log('Пришли данные (background.js)');
        if(message.id === 'getScreenId') {
            chrome.desktopCapture.chooseDesktopMedia(['screen', 'window'], port.sender.tab, function (sourceId) {
                if(!sourceId || ! sourceId.length) {
                    port.postMessage('Доступ закрыт');
                } else {
                    port.postMessage({
                        sourceId: sourceId
                    });
                }
            });
        }
    });
});