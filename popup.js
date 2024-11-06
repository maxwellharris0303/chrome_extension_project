// content_script.js

// Function to send a message to the background script
function sendMessageToBackgroundScript(message) {
    chrome.runtime.sendMessage(message);
  }
  
  // Function to extract the title of the current webpage
  function extractPageTitle() {
    console.log("sdfsdf")

  }
  
  // Execute the extraction when the page finishes loading
  window.addEventListener('load', extractPageTitle);