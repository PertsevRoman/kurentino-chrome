/**
 * Created by joker on 24.01.16.
 */

chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (message) {
        if(message.id === 'getScreenId') {
            chrome.desktopCapture.chooseDesktopMedia(['screen', 'window'], port.sender.tab, function (sourceId) {
                if(!sourceId || ! sourceId.length) {
                    port.postMessage({
                        id: 'screenId',
                        sourceId: null
                    });
                } else {
                    port.postMessage({
                        id: 'screenId',
                        sourceId: sourceId
                    });
                }
            });
        }
    });
});