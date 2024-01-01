//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  // Get the browser name and version from the navigator object
  const browserName = detectBrowserName();
  const browserVersion = detectBrowserVersion();

  // Display the information in the specified format
  const browserInfoDiv = document.getElementById('browser-info');
  browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
});

function detectBrowserName() {
  // Use navigator.appName to get the browser name
  return navigator.appName;
}

function detectBrowserVersion() {
  // Use navigator.appVersion to get the browser version
  return navigator.appVersion;
}

function activateSearch() {
  const searchDiv = document.querySelector('.search');
  const inputElement = document.querySelector('.input');

  searchDiv.classList.add('active');
  inputElement.focus();
}
