chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
          chrome.tabs.executeScript(tabs[i].id, {file: "calm.js"});
      }
    }
  );
});
