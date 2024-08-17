import express, { Application, Request, Response } from 'express';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import notFound from './app/middlewares/notFound';
// import router from './app/router';
const app: Application = express();

app.use(express.json());
// app.use(cookieParser());
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// app.use("", router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

// app.use(notFound);

export default app;
