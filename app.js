import express from 'express';
import { connect } from 'mongoose';
import routes from './routes.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user",routes);

app.use((req, res, next) => {
    res.status(404).json({
        message : 'Not found'
    });
  });

  connect('mongodb+srv://121smmmj:UD1gBfhOfHC0RyUJ@cluster1.sgk6bhh.mongodb.net/?retryWrites=true&w=majority')
  .then(result => {
    console.log('DB 연결 성공')
    app.listen(PORT);
    console.log(`${PORT}번 서버 열림`)
  })
  .catch(err => {
    console.log(err);
  });
