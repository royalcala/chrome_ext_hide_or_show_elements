chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'var element = document.getElementById("' + request.elementId + '") || document.getElementsByClassName("' + request.elementId + '")[0]; if (element.style.display === "none") { element.style.display = "block"; } else { element.style.display = "none"; }'},
        function(results) {
          sendResponse({result: results[0]});
        }
      );
    });
    return true;  // Will respond asynchronously.
  });