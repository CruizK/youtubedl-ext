
window.addEventListener("load", Spawn, false)
function Spawn() {
  const container = document.querySelector('#container > #top-row')

  if(!container) {
    setTimeout(Spawn, 2000);
    return;
  }

  
  let element = document.createElement('paper-button');
  element.className = "style-scope ytdl-button"
  element.innerHTML = "Download Video"
  
  element.addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    console.log("WHY NO WORK");

    element.innerHTML = "Downloading..."

    xhr.open('POST', 'http://localhost:3050/download', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({url: window.location.href}));

    xhr.onerror = function (err) {
      console.error(err);
      element.innerHTML = "Download Failed"
    }

    xhr.onprogress = function(evt) {
      element.innerHTML = "Downloaded: " + xhr.responseText.substr(-6);
    }

    xhr.onload = function(evt) {
      element.innerHTML = "Download Finished"
      setTimeout(function () {
        element.innerHTML = "Download Video"
      }, 10000)
    }
  });

  container.insertBefore(element, container.querySelector('#subscribe-button'))
}



