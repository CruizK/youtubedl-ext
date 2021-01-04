import express from 'express'
import * as config from './config.json'
import ytdl from 'ytdl-core'
import fs from 'fs'
import path from 'path'
import ffmpeg from 'fluent-ffmpeg'
import sanitize from 'sanitize-filename'

const router = express.Router();

router.post('/', async (req, res, next) => {
  let url = req.body.url;
  console.log(req.body);
  //const stream = fs.createWriteStream(path.join(config.musicDir, `${name}.mp3`));

  const info = await ytdl.getBasicInfo(url);

  const name = sanitize(info.videoDetails.title);

  const stream = ytdl(url, { quality: 'highestaudio'})

  stream.on('progress', (_, downloaded, total) => {
    try {
      if(downloaded/total < 1.0) {
        res.write(`${((downloaded/total)*100).toFixed(2)}%`);
      }
      
    }
    catch(e) {

    }
  })

  stream.on('end', () => {
    res.write("100%");
    res.end()
  })

  ffmpeg(stream)
    .audioBitrate(128)
    .save(path.join(config.musicDir, `${name}.mp3`))
})


export default router;