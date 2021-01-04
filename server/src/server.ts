import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();

app.use(bodyParser.json());
app.use(cors());

import downloadRoutes from './download'
app.use('/download', downloadRoutes);


app.listen(process.env.PORT || 3050, () => {
  console.log(`listenting on port: ${process.env.PORT || 3050}`);
})