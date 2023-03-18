chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({installed: true}, function() {
    console.log('The extension was successfully installed.')
  })
})
