import bodyParser from 'body-parser';
import express from 'express';
import next from 'next';

const dev = process.env.NODE_DEV !== 'production';
const PORT = process.env.PORT || 3000;

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('*', (req: express.Request, res: express.Response) => {
    return handle(req,res);
  });

  app.listen(PORT, () => {
    console.log(`ready at http://localhost:${PORT}`);
  });
});