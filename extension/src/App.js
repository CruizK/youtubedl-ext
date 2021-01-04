/* global browser */
import React from 'react'
import './App.css';

function App() {
  const [isYoutube, setIsYoutube] = React.useState(false);

  const DownloadVideo = async () => {
    try {
      const currentTab = await browser.tabs.query({active: true, currentWindow: true})

      const url = currentTab[0].url;
  
      const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({url})
      };
  
      await fetch('http://localhost:3050/download', opts)
      console.log("Done");
    }
    catch(e) {
      console.error(e);
    }
    
  }

  const CheckTab = async () => {
    const currentTab = await browser.tabs.query({active: true, currentWindow: true})
    const match = currentTab[0].url.match(/youtube.com\/watch.+/g);
    setIsYoutube(match ? true : false);
  }
  
  CheckTab();
  

  return (
    <div className="App">
      <div>

      </div>
      {isYoutube ? 
      <button onClick={DownloadVideo}>
        Download Video
      </button>
      : <h2>Navigate to video in order to download</h2>}
    </div>
  );
}

export default App;
