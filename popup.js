document.getElementById('toggleButton').addEventListener('click', function() {
    var elementId = document.getElementById('elementId').value;
    chrome.runtime.sendMessage({elementId: elementId}, function(response) {
      console.log(response.result);
    });
  });