# youtubedl-ext
Extension to download youtube videos from a single click using a locally running server
Firefox Extension Link: [HERE](https://addons.mozilla.org/firefox/downloads/file/3703510/ytdownloader-1.0-fx.xpi)

# Requirements
* Node & npm/yarn
* Have ffmpeg in your $PATH
* Specify a music file location in server/config.json


# Details
It uses a local hosted server on port 3050 to use ytdl and ffmpeg to download youtube videos from an injected button via the extension
The button should be next to the subscribe button like so
![Button Location](/imgs/button.png)

# How to use
* Have node, npm or yarn. for my case I use yarn
* Run `yarn` in server/
* Run `yarn build` to get the dist folder
* Then either run `yarn start` as a background process, but you should really use pm2, you can install it using `yarn global add pm2`
* With pm2 run `pm2 start dist/server.js` and it will run in the background
* You can use `pm2 status` to check the status of the current running server

# Features to add
- [ ] Allow configuring of which url the button requests to
- [ ] Better logs serverside in case something goes wrong
- [ ] Better button UI